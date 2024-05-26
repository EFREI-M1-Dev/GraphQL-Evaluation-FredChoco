import {Post, QueryResolvers} from "../../../types";
import consola from "consola";
import {commentSelect} from "../../selectorsPrisma.js";

export const getAllCommentsByPost: QueryResolvers["getAllCommentsByPost"] = async (_, {postId}, {dataSources}) => {

    try {
        const comments = await dataSources.db.comment.findMany({
            where: {
                postId: postId
            },
            select: commentSelect,
            orderBy: {
                createdAt: 'desc'
            }
        });

        return comments || [];
    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}