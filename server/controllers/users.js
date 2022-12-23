const User = require("../models/users");

const updateUser = async (req, res) => {
  const { email, role } = req.body;
  try {
    if (role && role == "admin")
      return res
        .status(400)
        .send({ msg: "vous ne pouvez pas changer votre rôle en tant qu'administrateur" });
    const checkEmail = await User.findOne({ email: email });
    if (checkEmail)
      return res.status(400).send({ msg: "essayez une autre adresse e-mail" });
    const updatedUser = await User.updateOne(
      { _id: req.user._id },
      { ...req.body }
    );
    if (updatedUser.modifiedCount) {
      const userAfterUpdate = await User.findOne({ _id: req.user._id });
      return res.send({ msg: "utilisateur éditer avec succès", userAfterUpdate });
    } else {
      return res.status(400).send({ msg: "utilisateur déjà éditer" });
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user._id });
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ _id: req.user._id });
    res.send({ msg: "Supprimé avec succès" });
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

module.exports = { updateUser, deleteUser, getUser };
