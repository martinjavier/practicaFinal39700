import { Router } from "express";
import passport from "passport";
import alert from "alert";
import jwt from "jsonwebtoken";
import { options } from "../config/options.js";
import {
  signup,
  login,
  logout,
  forgot,
  reset,
} from "../services/auth.service.js";
import { isValidPassword, createHash } from "../utils.js";
import { isUserAuthenticate } from "../middlewares/validations.js";
import { UserModel } from "../dao/factory.js";

const authRouter = Router();

export const loginController = async (req, res) => {
  const result = login(req, res);
};

export const redirectController = async (req, res) => {
  res.redirect("/products");
};

export const signupController = async (req, res) => {
  const result = signup(req, res);
  res.redirect("/login");
};

export const failSignup = (req, res) => {
  res.send(
    `<div>Error with the User registration <a href="/signup">Try Again<a></div>`
  );
};

export const failLogin = (req, res) => {
  res.send(`<div>Error with the Login <a href="/login">Try Again<a></div>`);
};

export const logoutController = (req, res) => {
  const result = logout(req, res);
  res.clearCookie(options.server.cookieToken).redirect("/login");
};

export const forgotController = (req, res) => {
  const result = forgot(req, res);
};

export const resetController = (req, res) => {
  const result = reset(req, res);
};
