import consola from "consola";
import { MutationResolvers } from "../../types";
import { comparePasswords, createJWT } from "../../modules/auth.js";

export const signInUser: MutationResolvers["signInUser"] = async (_, { username, password }, { dataSources }) => {
    try {
        const user = await dataSources.db.user.findFirst({
            where: {
                username: {
                    equals: username.toLowerCase(),
                    // mode: 'insensitive',
            }
            }
        });

        if (!user) {
            return {
                code: 404,
                success: false,
                message: 'User not found',
                token: null
            }
        }

        const isPasswordValid = await comparePasswords(password, user.password)

        if (!isPasswordValid) {
            return {
                code: 401,
                success: false,
                message: 'Invalid password',
                token: null
            }
        }

        return {
            code: 200,
            success: true,
            message: 'User has been signed in',
            token: createJWT({username: user.username, id: user.id, email: user.email, imagePath: user.imagePath})
        }
    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            token: null
        }
    }
}