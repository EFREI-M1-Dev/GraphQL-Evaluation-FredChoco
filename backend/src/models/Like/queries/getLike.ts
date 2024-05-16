import { QueryResolvers } from "../../../types";
import {consola} from "consola";
import {likeSelect} from "../../selectorsPrisma.js";

export const getLike: QueryResolvers["getLike"] = async (_, { id }, { dataSources }) => {
    try {
        const like = await dataSources.db.like.findUnique({
            where: {
                id: id
            },
            select: likeSelect
        });

        if(!like) {
            return null;
        }

        return like;
    } catch (e) {
        return null;
    }
};


