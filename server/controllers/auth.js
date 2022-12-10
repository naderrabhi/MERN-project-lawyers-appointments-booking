const User = require("../models/users");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const sendEmail = require('../utils/sendEmail');
const sendToken = require('../utils/sendToken');

const registerUserAsLawyer = async (req, res) => {
  const { email, password, passwordConfirm, role } = req.body;
  try {
    
    const existUser = await User.findOne({ email: email });

    if (existUser)
      return res.status(400).send({ msg: "Avocat déjà existe" });

    if (role && role == "admin")
      return res.status(400).send({ msg: "vous ne pouvez pas vous inscrire en tant qu'administrateur" });
    
    if (password !== passwordConfirm)
      return res.status(400).send({ msg: "mot de passe ne correspond pas" });

    const newLawyer = await new User({ ...req.body, role: "lawyer" });
    const hashedPassword = await bcrypt.hash(password, 10);
    newLawyer.password = hashedPassword;
    newLawyer.passwordConfirm = "";
    await newLawyer.save();
    res.send({
      msg: "Avocat enregistré avec succès, veuillez vous connecter pour confirmer votre compte",
      newLawyer,
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const registerUserAsClient = async (req, res) => {
  const { email, password, passwordConfirm, role } = req.body;
  try {
    const existUser = await User.findOne({ email: email });

    if (existUser)
      return res.status(400).send({ msg: "Client déjà exists" });
    if (role && role == "admin")
      return res.status(400).send({ msg: "vous ne pouvez pas vous inscrire en tant qu'administrateur" });
    if (password !== passwordConfirm)
      return res.status(400).send({ msg: "mot de passe ne correspond pas" });

    const newClient = await new User({ ...req.body });
    const hashedPassword = await bcrypt.hash(password, 10);
    newClient.password = hashedPassword;
    newClient.passwordConfirm = "";
    await newClient.save();
    res.send({
      msg: "Client enregistré avec succès, veuillez vous connecter pour confirmer votre compte",
      newClient,
    });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email: email });

    if (!existUser)
      return res
        .status(400)
        .send({ msg: "l'utilisateur n'existe pas, veuillez vous inscrire" });

    const isMatched = await bcrypt.compare(password, existUser.password);
    if (!isMatched) {
      return res.status(400).send({ msg: "bad credentials" });
    }
    const payload = { id: existUser._id };
    const token = await jwt.sign(payload, process.env.privateKey);
    return res.send({ msg: "connectez-vous avec succès ", user: existUser, token });
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

// Forgot Password
const forgotPassword = async (req, res) => {
  
  const user = await User.findOne({email: req.body.email});

  if(!user) {
      return res.status(404).send({msg : "l'utilisateur n'existe pas"})
  }

  const resetToken = await user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;
  const resetPasswordUrl = `https://${req.get("host")}/api/v1/auth/password/reset/${resetToken}`;

  // const message = `Your password reset token is : \n\n ${resetPasswordUrl}`;

  try {
      await sendEmail({
          email: user.email,
          templateId: process.env.SENDGRID_RESET_TEMPLATEID,
          data: {
              reset_url: resetPasswordUrl
          }
      });

      res.status(200).json({
          success: true,
          message: `Email sent to ${user.email} successfully`,
      });

  } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      res.status(400).send({ msg: error.message });
      console.log(error);
  }
};

// Reset Password
const resetPassword = async (req, res, next) => {

  // create hash token
  const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex");

  const user = await User.findOne({ 
      resetPasswordToken,
      resetPasswordExpire: { $gt: Date.now() }
  });

  if(!user) {
    return res.status(404).send({msg : "TOKEN,mot de passe de réinitialisation invalide"})
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();
  sendToken(user, 200, res);
};

const currentUser = async (req, res) => {
  res.send(req.user);
};

module.exports = {
  registerUserAsLawyer,
  currentUser,
  loginUser,
  forgotPassword,
  resetPassword,
  registerUserAsClient,
};
