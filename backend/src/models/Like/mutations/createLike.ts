import {MutationResolvers} from "../../../types";
import consola from "consola";

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

        if (!createdLike) {
            throw new Error('Failed to create like');
        }

        return {
            code: 200,
            success: true,
            message: 'Like has been created',
            like:
                {
                    id: createdLike.id,
                    user: createdLike.user,
                    post: createdLike.post
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