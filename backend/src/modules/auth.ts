import { User as UserPrisma } from "@prisma/client";
import jwt from "jsonwebtoken";
import { consola } from "consola";
import * as bcrypt from "bcrypt";


export type User = Pick<UserPrisma, "id" | "username" | "email">;

export const createJWT = (user: User) => jwt.sign(user, process.env.JWT_SECRET);

export const verifyJWT = (token: string) => jwt.verify(token, process.env.JWT_SECRET) as User;

export const getUserFromToken = (token: string) : User | null => {
    try {
        return verifyJWT(token);
    } catch (error) {
        consola.error(error);
        return null;
    }
}

export const hashPassword = (password: string): Promise<string> => bcrypt.hash(password, 5);

export const comparePasswords = (password: string, hash: string): Promise<boolean> => bcrypt.compare(password, hash);
