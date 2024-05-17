import {MutationResolvers} from "../../../types";
import consola from "consola";
import {create} from "node:domain";
import {commentSelect} from "../../selectorsPrisma.js";

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
            select: commentSelect
        });

        if (!createdComment) {
            throw new Error('Failed to create comment');
        }

        return {
            code: 200,
            success: true,
            message: 'Comment has been created',
            comment: createdComment
        }
    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            comment: null
        }
    }
}