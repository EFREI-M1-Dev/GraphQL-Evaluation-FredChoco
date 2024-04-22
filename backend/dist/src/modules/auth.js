import jwt from "jsonwebtoken";
import { consola } from "consola";
import * as bcrypt from "bcrypt";
export const createJWT = (user) => jwt.sign(user, process.env.JWT_SECRET);
export const verifyJWT = (token) => jwt.verify(token, process.env.JWT_SECRET);
export const getUserFromToken = (token) => {
    try {
        return verifyJWT(token);
    }
    catch (error) {
        consola.error(error);
        return null;
    }
};
export const hashPassword = (password) => bcrypt.hash(password, 5);
export const comparePasswords = (password, hash) => bcrypt.compare(password, hash);
