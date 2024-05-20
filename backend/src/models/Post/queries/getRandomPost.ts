import { Post, QueryResolvers } from "../../../types";
import consola from "consola";
import { postSelect } from "../../selectorsPrisma.js";

export const getRandomPost: QueryResolvers["getRandomPost"] = async (_, __, { dataSources }) => {
    try {
        const postCount = await dataSources.db.post.count();

        if (postCount === 0) {
            throw new Error("No posts available");
        }

        const randomOffset = Math.floor(Math.random() * postCount);

        const posts = await dataSources.db.post.findMany({
            take: 1,
            skip: randomOffset,
            select: {
                ...postSelect,
                Like: true,
                Dislike: true,
                Comment: true,
            }
        });

        if (posts.length === 0) {
            throw new Error("Failed to fetch a random post");
        }

        return posts[0];

    } catch (e) {
        consola.error(e as Error);
        throw new Error("Unable to retrieve a random post");
    }
}
