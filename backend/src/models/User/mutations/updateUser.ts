import { MutationResolvers } from "../../../types";
import consola from "consola";
import {createJWT} from "../../../modules/auth";

export const updateUser: MutationResolvers["updateUser"] = async (_, { id, input }, { dataSources }) => {
    try {
        const updatedUser = await dataSources.db.user.update({
            where: { id },
            data: {
              ...input
            }
        });

        const newToken = createJWT(updatedUser);

        return {
            code: 200,
            success: true,
            message: 'User has been updated',
            user: updatedUser,
            token: newToken
        };


    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            user: null,
            token: null
        };
    }
};
