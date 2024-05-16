import {QueryResolvers} from "../../../types";
import {commentSelect} from "../../selectorsPrisma.js";

export const getComment: QueryResolvers["getComment"] = async (_, {id}, {dataSources}) => {
    try {
        const comment = await dataSources.db.comment.findUnique({
            where: {
                id: id
            },
            select: commentSelect
        });

        if (!comment) {
            throw new Error('Comment not found')
        }

        return comment;
    } catch (e) {
        return null;
    }
};


