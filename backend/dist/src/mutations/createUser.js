import consola from "consola";
import { hashPassword } from "../modules/auth.js";
export const createUser = async (_, { username, password }, { dataSources }) => {
    try {
        const createdUser = await dataSources.db.user.create({
            data: {
                username,
                password: await hashPassword(password)
            }
        });
        return {
            code: 200,
            success: true,
            message: 'User has been created',
            user: {
                id: createdUser.id,
                username: createdUser.username
            }
        };
    }
    catch (e) {
        consola.error(e);
        return {
            code: 500,
            success: false,
            message: e.message,
            user: null
        };
    }
};
