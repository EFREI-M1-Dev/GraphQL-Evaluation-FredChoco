import { QueryResolvers } from "../../../types";
import {consola} from "consola";
import {postSelect} from "../../selectorsPrisma.js";

export const getTotalPostCount: QueryResolvers["getTotalPostCount"] = async (_, __, { dataSources }) => {
    try {
        const posts = await dataSources.db.post.findMany({
            select: postSelect,
        });
        return posts.length;
    } catch (e) {
        consola.error(e);
        return 0;
    }
};
