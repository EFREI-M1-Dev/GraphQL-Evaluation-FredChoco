import {Post, QueryResolvers, User} from "../../../types";
import consola from "consola";
import {likeSelect, postSelect} from "../../selectorsPrisma.js";

export const getUserPosts: QueryResolvers["getUserPosts"] = async (_, {id}, {dataSources}) => {

    try {
        const posts = await dataSources.db.post.findMany({
            take: 10,
            orderBy: {
                createdAt: "desc",
            },
            select: postSelect,
            where: {
                id: id
            }
        });

        if (!posts) {
            return [];
        }

        return posts;
    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}