import { MutationResolvers } from "../../../types";
import consola from "consola";

export const deleteLike: MutationResolvers["deleteLike"] = async (_, { id }, { dataSources }) => {
    try {
        const result = await dataSources.db.like.delete({
            where: {
                id: id
            }
        });

        if(!result) {
            throw new Error('Like not found');
        }

        return {
            code: 200,
            success: true,
            message: 'Like has been deleted'
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
