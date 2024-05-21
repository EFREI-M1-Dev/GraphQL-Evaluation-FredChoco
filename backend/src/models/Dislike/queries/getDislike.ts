import { QueryResolvers } from "../../../types";
import {dislikeSelect} from "../../selectorsPrisma.js";

export const getDislike: QueryResolvers["getDislike"] = async (_, { userId, postId}, { dataSources }) => {
    try {
        const dislike = await dataSources.db.dislike.findFirst({
            where: {
                userId : userId,
                postId: postId
            },
            select: dislikeSelect
        });

        return dislike || null;
    } catch (e) {
        return null;
    }
};


