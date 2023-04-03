import { User } from "./../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const createUser = async (req, res) => {
  const { role, firstName, lastName, email, password } = req.body;

  try {
    const newUser = await User.create({
      role,
      firstName,
      lastName,
      email,
      password,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.findOne({ _id: id });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName } = req.body;
  try {
    await User.findOneAndUpdate({ _id: userId }, { firstName, lastName });
    res.status(200).json("updated!");
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteUser = async (req, res) => {
  const userId = req.params.id;
  try {
    await User.findOneAndRemove({ _id: userId });
    res.status(200).json("deleted!");
  } catch (error) {
    res.status(400).json(error);
  }
};
