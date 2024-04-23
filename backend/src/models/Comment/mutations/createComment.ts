import {MutationResolvers} from "../../../types";
import consola from "consola";
import {create} from "node:domain";

export const createComment: MutationResolvers["createComment"] = async (_, {userId, postId, content}, {dataSources}) => {

    try {
        const createdComment = await dataSources.db.comment.create({
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
                },
                content: content
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

        if (!createdComment) {
            throw new Error('Failed to create comment');
        }

        return {
            code: 200,
            success: true,
            message: 'Comment has been created',
            comment:
                {
                    id: createdComment.id,
                    user: createdComment.user,
                    post: createdComment.post,
                    content: createdComment.content
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