import {QueryResolvers} from "../../../types";
import consola from "consola";
import {postSelect} from "../../selectorsPrisma.js";

export const getPostLikedByUser: QueryResolvers["getPostLikedByUser"] = async (_, {id}, {dataSources}) => {

    try {
        const likes = await dataSources.db.like.findMany({
            where: {
                userId: id
            },
            select: {
                postId: true
            },
            take: 10,
            orderBy: {
                createdAt: "desc"
            }
        });

        const postIds = likes.map(like => like.postId);

        const posts = await dataSources.db.post.findMany({
            where: {
                id: {
                    in: postIds
                }
            },
            select: {
                ...postSelect,
                Like: true,
                Dislike: true,
                Comment: true
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