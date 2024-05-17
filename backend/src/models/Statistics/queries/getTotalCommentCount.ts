import { QueryResolvers } from "../../../types";
import {consola} from "consola";
import {commentSelect} from "../../selectorsPrisma.js";

export const getTotalCommentCount: QueryResolvers["getTotalCommentCount"] = async (_, __, { dataSources }) => {
    try {
        const comments = await dataSources.db.comment.findMany({
            select: commentSelect,
        });
        return comments.length;
    } catch (e) {
        consola.error(e);
        return 0;
    }
};
