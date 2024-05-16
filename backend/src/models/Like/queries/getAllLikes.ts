import {Post, QueryResolvers, User} from "../../../types";
import consola from "consola";
import {likeSelect} from "../../selectorsPrisma.js";

export const getAllLikes: QueryResolvers["getAllLikes"] = async (_, __, {dataSources}) => {

    try {
        const likes = await dataSources.db.like.findMany({
            select: likeSelect
        });

        if (!likes) {
            return [];
        }

        return likes;
    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}