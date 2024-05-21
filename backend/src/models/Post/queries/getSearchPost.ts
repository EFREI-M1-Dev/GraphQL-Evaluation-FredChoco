import {QueryResolvers} from "../../../types";
import consola from "consola";
import {postSelect} from "../../selectorsPrisma.js";

export const getSearchPost: QueryResolvers["getSearchPost"] = async (_, {input, sortPopularity}, {dataSources}) => {

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
                    },
                    {
                        user: {
                            username: {
                                contains: input
                            }
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

        let transformedPosts = posts.map((post) => ({
            post,
            likes: post.Like.length, // Comptez le nombre de likes
            dislikes: post.Dislike.length, // Comptez le nombre de dislikes
            comments: post.Comment.length // Comptez le nombre de commentaires
        }));


        if (sortPopularity) {
            transformedPosts = transformedPosts.sort((a, b) => {
                const ratioA = a.likes / (a.likes + a.dislikes || 1);
                const ratioB = b.likes / (b.likes + b.dislikes || 1);
                return ratioB - ratioA;
            });
        }

        return transformedPosts || [];

    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}