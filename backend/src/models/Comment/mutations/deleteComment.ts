import { MutationResolvers } from "../../../types";
import consola from "consola";

export const deleteComment: MutationResolvers["deleteComment"] = async (_, { id }, { dataSources }) => {
    try {
        // Logique de suppression de comment
        await dataSources.db.comment.delete({
            where: {
                id: id
            }
        });

        return {
            code: 200,
            success: true,
            message: 'Comment has been deleted'
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
