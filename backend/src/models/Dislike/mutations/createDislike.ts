import {MutationResolvers} from "../../../types";
import consola from "consola";
import {dislikeSelect} from "../../selectorsPrisma.js";

export const createDislike: MutationResolvers["createDislike"] = async (_, {userId, postId}, {dataSources}) => {

    try {
        const createdDislike = await dataSources.db.dislike.create({
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
            select: dislikeSelect
        });


        const like = await dataSources.db.like.findFirst({
            where: {
                userId: userId,
                postId: postId
            }
        });

        if (like) {
            await dataSources.db.like.delete({
                where: {
                    id: like.id
                }
            });
        }


        if (!createdDislike) {
            throw new Error('Failed to create dislike');
        }

        return {
            code: 200,
            success: true,
            message: 'Dislike has been created',
            dislike: createdDislike
        }
    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            dislike: null
        }
    }
}