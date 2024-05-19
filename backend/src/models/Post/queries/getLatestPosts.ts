import { QueryResolvers } from "../../../types";
import consola from "consola";
import {postSelect} from "../../selectorsPrisma.js";

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
                Dislike: true,
                Comment: true,
            }
        });

        const transformedPosts = postsWithLikesAndDislikes.map((post) => ({
            post,
            likes: post.Like.length, // Comptez le nombre de likes
            dislikes: post.Dislike.length, // Comptez le nombre de dislikes
            comments: post.Comment.length // Comptez le nombre de commentaires
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