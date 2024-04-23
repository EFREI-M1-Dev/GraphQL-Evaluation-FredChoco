import { MutationResolvers } from "../../../types";
import consola from "consola";

export const deleteDislike: MutationResolvers["deleteDislike"] = async (_, { id }, { dataSources }) => {
    try {
        const result = await dataSources.db.dislike.delete({
            where: {
                id: id
            }
        });

        if(!result) {
            throw new Error('Dislike not found');
        }

        return {
            code: 200,
            success: true,
            message: 'Dislike has been deleted'
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
