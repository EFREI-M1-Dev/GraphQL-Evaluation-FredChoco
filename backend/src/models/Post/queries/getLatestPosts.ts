import {Post, QueryResolvers, User} from "../../../types";
import consola from "consola";
import {dislikeSelect, likeSelect, postSelect} from "../../selectorsPrisma.js";

export const getLatestPosts: QueryResolvers["getLatestPosts"] = async (_, __, {dataSources}) => {

    try {
        const postsWithLikesAndDislikes = await dataSources.db.post.findMany({
            take: 10,
            orderBy: {
                createdAt: "desc",
            },
            select: {
                ...postSelect,
                Like: true,
                Dislike: true
            }
        });

        const transformedPosts = postsWithLikesAndDislikes.map((post) => ({
            post,
            likes: post.Like.length, // Comptez le nombre de likes
            dislikes: post.Dislike.length // Comptez le nombre de dislikes
        }));

        console.log(transformedPosts);

        if (!transformedPosts) {
            return [];
        }

        return transformedPosts;
    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}