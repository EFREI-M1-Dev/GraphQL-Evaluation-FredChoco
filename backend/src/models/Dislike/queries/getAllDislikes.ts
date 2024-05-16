import {Post, QueryResolvers, User} from "../../../types";
import consola from "consola";
import {dislikeSelect} from "../../selectorsPrisma.js";

export const getAllDislikes: QueryResolvers["getAllDislikes"] = async (_, __, {dataSources}) => {

    try {
        const dislikes = await dataSources.db.dislike.findMany({
            select: dislikeSelect
        });

        if (!dislikes) {
            return [];
        }

        return dislikes;
    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}