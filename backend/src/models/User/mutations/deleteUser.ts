import { MutationResolvers } from "../../../types";
import consola from "consola";

export const deleteUser: MutationResolvers["deleteUser"] = async (_, { id }, { dataSources }) => {
    try {
        const result = await dataSources.db.user.delete({
            where: {
                id: id
            }
        });

        if(!result) {
            throw new Error('User not found');
        }

        return {
            code: 200,
            success: true,
            message: 'User has been deleted'
        };
    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message
        };
    }
};
