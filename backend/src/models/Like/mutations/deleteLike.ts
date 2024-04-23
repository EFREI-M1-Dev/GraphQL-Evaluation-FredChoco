import { MutationResolvers } from "../../../types";
import consola from "consola";

export const deleteLike: MutationResolvers["deleteLike"] = async (_, { id }, { dataSources }) => {
    try {
        // Logique de suppression de like
        await dataSources.db.like.delete({
            where: {
                id: id
            }
        });

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
