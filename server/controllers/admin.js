const Appointment = require("../models/appointments");
const User = require("../models/users");
const Post = require("../models/post");

const getAllUsers = async (req, res) => {
  const role = req.query.role;
  const name = req.query.name;
  try {
    if (role == "all") {
      const users = await User.find({ firstName: { $regex: name } }).populate("profileID");
      if (!users) return res.status(400).send({ msg: "Aucun utilisateur trouvé" });
      return res.send(users);
    }
    const users = await User.find({ role: role, firstName: { $regex: name } });
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

const getOneUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const client = await User.findById(id);
    if (!client) return res.status(400).send({ msg: "Aucun utilisateur trouvé" });
    if (client) return res.send(client);
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
};

const deleteUsers = async (req, res) => {
  const id = req.params.id;
  try {
    const existUser = await User.findOne({ _id: id });

    if (!existUser) return res.status(400).send({ msg: "Aucun utilisateur trouvé" });

    const deletedClient = await User.deleteOne({ _id: id });
    if (deletedClient.deletedCount) {
      return res.send({ msg: "Utilisateur supprimé avec succès" });
    } else {
      return res.status(400).send({ msg: "Utilisateur déjà supprimé" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const deleteAppointmentByAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedAppointment = await Appointment.deleteOne({ lawyerID : id });
    if (deletedAppointment.deletedCount) {
      return res.send({ msg: "Rendez-vous supprimé avec succès" });
    } else {
      return res.status(400).send({ msg: "Rendez-vous déjà supprimé" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};

const deletePostByAdmin = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedPost = await Post.deleteOne({ lawyerID : id });
    if (deletedPost.deletedCount) {
      return res.send({ msg: "Commentaire supprimé avec succès" });
    } else {
      return res.status(400).send({ msg: "Commentaire déjà supprimé" });
    }
  } catch (error) {
    res.status(400).send({ msg: error.message });
    console.log(error);
  }
};
module.exports = { getAllUsers, deleteUsers, getOneUsers,deleteAppointmentByAdmin,deletePostByAdmin};
