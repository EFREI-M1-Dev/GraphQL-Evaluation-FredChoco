import consola from "consola";
import { MutationResolvers } from "../../../types";
import { hashPassword } from "../../../modules/auth";

export const createUser: MutationResolvers["createUser"] = async (_, { username, password, email }, { dataSources }) => {

    try {
        const createdUser = await dataSources.db.user.create({
            data: {
                username,
                email,
                password: await hashPassword(password)
            }
        });

        return {
            code: 200,
            success: true,
            message: 'User has been created',
            user:
                {
                    id: createdUser.id,
                    username: createdUser.username
                }
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