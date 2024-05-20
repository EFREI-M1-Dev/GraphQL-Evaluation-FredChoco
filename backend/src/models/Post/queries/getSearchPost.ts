import {Post, QueryResolvers, User} from "../../../types";
import consola from "consola";
import {dislikeSelect, likeSelect, postSelect} from "../../selectorsPrisma.js";

export const getSearchPost: QueryResolvers["getSearchPost"] = async (_, {input}, {dataSources}) => {

    try {
        const posts = await dataSources.db.post.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: input
                        }
                    },
                    {
                        content: {
                            contains: input
                        }
                    }
                ]
            },
            select: {
                ...postSelect,
                Like: true,
                Dislike: true,
                Comment: true,
            },
            take: 10
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