import {MutationResolvers} from "../../../types";
import consola from "consola";

export const createLike: MutationResolvers["createLike"] = async (_, {userId, postId}, {dataSources}) => {

    try {
        const createdLike = await dataSources.db.like.create({
            data: {
                userId,
                postId
            }
        });

        return {
            code: 200,
            success: true,
            message: 'Like has been created',
            like:
                {
                    id: createdLike.id,
                    postId: createdLike.postId,
                    userId: createdLike.postId
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