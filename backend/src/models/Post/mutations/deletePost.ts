import { MutationResolvers } from "../../../types";
import consola from "consola";

export const deletePost: MutationResolvers["deletePost"] = async (_, { id }, { dataSources }) => {
    try {
        const result = await dataSources.db.post.delete({
            where: {
                id: id
            }
        });

        if(!result) {
            throw new Error('Post not found');
        }

        return {
            code: 200,
            success: true,
            message: 'Post has been deleted'
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
