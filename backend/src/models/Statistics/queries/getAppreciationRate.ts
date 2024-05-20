import { QueryResolvers } from "../../../types";
import {consola} from "consola";
import {commentSelect, dislikeSelect, likeSelect} from "../../selectorsPrisma.js";

export const getAppreciationRate: QueryResolvers["getAppreciationRate"] = async (_, __, { dataSources }) => {
    try {
        const likes = await dataSources.db.like.findMany({
            select: likeSelect,
        });

        const dislikes = await dataSources.db.dislike.findMany({
            select: dislikeSelect,
        });

        if(likes.length + dislikes.length === 0) return 0;

        // Appreciation rate
        return likes.length / (likes.length + dislikes.length) * 100;
    } catch (e) {
        consola.error(e);
        return 0;
    }
};
