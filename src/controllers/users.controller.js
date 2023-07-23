import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  deleteInactiveUsers,
  premiumUser,
  getUserRole,
  uploadFile,
} from "../services/user.service.js";
import { createCart } from "../services/cart.service.js";
import { UserModel } from "../dao/factory.js";

export const getUsersController = async (req, res) => {
  try {
    const users = await getUsers();
    res.json({ status: "success", payload: users });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
};

export const getUserByIdController = async (req, res) => {
  try {
    const user = await getUserById(req.params.uid);
    res.json({ status: "success", payload: user });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
};

export const createUserController = async (req, res) => {
  try {
    const cartCreated = await createCart({
      products: [{ id: "012345678901234567890123", quantity: 1 }],
    });
    const cartID = cartCreated._id;
    const mockBody = req.body;
    mockBody.cart = cartID;
    const userCreated = await createUser(mockBody);
    console.log("userCreated: " + userCreated);
    res.json({ status: "success", payload: userCreated });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
};

export const updateUserController = (req, res) => {
  try {
    const userId = req.params.uid;
    const body = req.body;
    const result = updateUser(userId, body);
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
};

export const deleteUserController = (req, res) => {
  try {
    const userId = req.params.uid;
    const result = deleteUser(userId);
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
};

export const deleteAllInactiveUsers = (req, res) => {
  try {
    const result = deleteInactiveUsers();
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
};

export const premiumUserController = (req, res) => {
  try {
    const userId = req.params.uid;
    const result = premiumUser(userId);
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
};

export const getUserRoleController = (req, res) => {
  try {
    const userId = req.params.uid;
    const result = getUserRole(userId);
    res.json({ status: "success", data: result });
  } catch (error) {
    res.json({ status: "error", message: error.message });
  }
};

export const uploadFileController = async (req, res) => {
  try {
    const result = uploadFile(req, res);
  } catch (error) {
    console.log(error.message);
    res.json({ status: "error", message: "Error trying to upload a document" });
  }
};
