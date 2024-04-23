import {MutationResolvers} from "../../../types";
import consola from "consola";

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
            include: {
                user: {
                    select: {
                        id: true,
                        email: true,
                        username: true
                    }
                },
                post: {
                    select: {
                        id: true,
                        title: true,
                        content: true,
                        user: {
                            select: {
                                id: true,
                                email: true,
                                username: true
                            }
                        }
                    }
                }
            }
        });

        if (!createdDislike) {
            throw new Error('Failed to create dislike');
        }

        return {
            code: 200,
            success: true,
            message: 'Dislike has been created',
            dislike:
                {
                    id: createdDislike.id,
                    user: createdDislike.user,
                    post: createdDislike.post
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