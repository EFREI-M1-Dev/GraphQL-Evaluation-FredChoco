import {Post, QueryResolvers} from "../../../types";
import consola from "consola";
import {commentSelect} from "../../selectorsPrisma.js";

export const getAllComments: QueryResolvers["getAllComments"] = async (_, __, {dataSources}) => {

    try {
        const comments = await dataSources.db.comment.findMany({
            select: commentSelect
        });

        if (!comments) {
            return [];
        }

        return comments;
    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}