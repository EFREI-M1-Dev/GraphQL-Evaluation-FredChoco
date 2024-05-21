import {MutationResolvers} from "../../../types";
import consola from "consola";
import {commentSelect} from "../../selectorsPrisma.js";

export const updateComment: MutationResolvers["updateComment"] = async (_, {id, content}, {dataSources, user}) => {
    try {
        const currentComment = await dataSources.db.comment.findUnique({
            where: {id},
            select: commentSelect
        });

        if (!currentComment) {
            return {
                code: 404,
                success: false,
                message: 'Comment not found',
                comment: null,
            };
        }

        if (currentComment.user.id !== user?.id) {
            return {
                code: 403,
                success: false,
                message: 'You are not allowed to update this comment',
                comment: null,
            };
        }

        const updatedComment = await dataSources.db.comment.update({
            where: { id },
            data: { content },
            select: commentSelect
        });


        return {
            code: 200,
            success: true,
            message: 'Comment has been updated',
            comment: updatedComment,
        };


    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            post: null,
        };
    }
};
