import { QueryResolvers } from "../../../types";
import {consola} from "consola";
import {postSelect} from "../../selectorsPrisma.js";

export const getPost: QueryResolvers["getPost"] = async (_, { id }, { dataSources }) => {
    try {

        const post = await dataSources.db.post.findUnique({
            where: {
                id: id
            },
            select: {
                ...postSelect,
                Like: true,
                Dislike: true,
                Comment: true,
            }
        });

        if(!post){
            return null;
        }

        const transformedPosts = {
            post,
            likes: post.Like.length, // Comptez le nombre de likes
            dislikes: post.Dislike.length, // Comptez le nombre de dislikes
            comments: post.Comment.length // Comptez le nombre de commentaires
        };

        return transformedPosts || null;

    } catch (e) {
        consola.error(e);
        return null;
    }
};
