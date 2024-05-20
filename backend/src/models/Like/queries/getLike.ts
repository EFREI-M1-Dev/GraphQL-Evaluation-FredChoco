import { QueryResolvers } from "../../../types";
import {consola} from "consola";
import {likeSelect} from "../../selectorsPrisma.js";

export const getLike: QueryResolvers["getLike"] = async (_, { userId, postId}, { dataSources }) => {
    try {
        const like = await dataSources.db.like.findFirst({
            where: {
                userId : userId,
                postId: postId
            },
            select: likeSelect
        });

        return like || null;
    } catch (e) {
        return null;
    }
};


