import {MutationResolvers} from "../../../types";
import consola from "consola";
import {likeSelect} from "../../selectorsPrisma.js";

export const createLike: MutationResolvers["createLike"] = async (_, {userId, postId}, {dataSources}) => {

    try {
        const createdLike = await dataSources.db.like.create({
            data: {
                user: {
                    connect: {
                        id: userId
                    }
                },
                post: {
                    connect: {
                        id: postId
                    }
                }
            },
            select: likeSelect
        });

        const dislike = await dataSources.db.dislike.findFirst({
            where: {
                userId: userId,
                postId: postId
            }
        });

        if (dislike) {
            await dataSources.db.dislike.delete({
                where: {
                    id: dislike.id
                }
            });
        }

        if (!createdLike) {
            throw new Error('Failed to create like');
        }

        return {
            code: 200,
            success: true,
            message: 'Like has been created',
            like:createdLike
        }
    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            like: null
        }
    }
}