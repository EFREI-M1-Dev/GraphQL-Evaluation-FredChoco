import consola from "consola";
import { MutationResolvers } from "../../../types";
import { hashPassword } from "../../../modules/auth.js";
import {userJWTSelect} from "../../selectorsPrisma.js";

export const createUser: MutationResolvers["createUser"] = async (_, { username, password, email }, { dataSources }) => {

    try {
        const createdUser = await dataSources.db.user.create({
            data: {
                username,
                email,
                password: await hashPassword(password)
            },
            select: userJWTSelect
        });

        return {
            code: 200,
            success: true,
            message: 'User has been created',
            user: createdUser
        }
    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            user: null
        }
    }
}