import {MutationResolvers} from "../../../types";
import consola from "consola";
import {dislikeSelect} from "../../selectorsPrisma";

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
            include: dislikeSelect
        });

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