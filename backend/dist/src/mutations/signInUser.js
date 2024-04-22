import consola from "consola";
import { comparePasswords, createJWT } from "../modules/auth.js";
export const signInUser = async (_, { username, password }, { dataSources }) => {
    try {
        const user = await dataSources.db.user.findFirst({
            where: {
                username
            }
        });
        if (!user) {
            return {
                code: 404,
                success: false,
                message: 'User not found',
                token: null
            };
        }
        const isPasswordValid = await comparePasswords(password, user.password);
        if (!isPasswordValid) {
            return {
                code: 401,
                success: false,
                message: 'Invalid password',
                token: null
            };
        }
        return {
            code: 200,
            success: true,
            message: 'User has been signed in',
            token: createJWT({ username: user.username, id: user.id })
        };
    }
    catch (e) {
        consola.error(e);
        return {
            code: 500,
            success: false,
            message: e.message,
            token: null
        };
    }
};
