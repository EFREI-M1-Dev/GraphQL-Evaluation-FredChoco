import {QueryResolvers} from "../../../types";
import consola from "consola";
import {postSelect} from "../../selectorsPrisma.js";

export const getUserPosts: QueryResolvers["getUserPosts"] = async (_, {id}, {dataSources}) => {

    try {
        const posts = await dataSources.db.post.findMany({
            take: 10,
            orderBy: {
                createdAt: "desc",
            },
            select: {
                ...postSelect,
                Like: true,
                Dislike: true,
                Comment: true,
            },
            where: {
                userId: id
            }
        });

        const transformedPosts = posts.map((post) => ({
            post,
            likes: post.Like.length, // Comptez le nombre de likes
            dislikes: post.Dislike.length, // Comptez le nombre de dislikes
            comments: post.Comment.length // Comptez le nombre de commentaires
        }));

        return transformedPosts || [];
    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}