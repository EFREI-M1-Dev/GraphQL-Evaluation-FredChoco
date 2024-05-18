import { QueryResolvers } from "../../../types";
import consola from "consola";
import {likeSelect } from "../../selectorsPrisma.js";

export const getLikesByUser: QueryResolvers["getLikesByUser"] = async (_, {id}, {dataSources}) => {

    try {
        const likes = await dataSources.db.like.findMany({
            take: 10,
            orderBy: {
                createdAt: "desc",
            },
            select: likeSelect,
            where: {
                userId: id,
            },

        });

        return likes || [];
    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}