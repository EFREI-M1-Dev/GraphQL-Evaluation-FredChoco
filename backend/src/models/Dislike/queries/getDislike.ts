import { QueryResolvers } from "../../../types";

export const getDislike: QueryResolvers["getDislike"] = async (_, { id }, { dataSources }) => {
    try {
        const dislike = await dataSources.db.dislike.findUnique({
            where: {
                id: id
            }
        });

        if (!dislike) {
            return null;
        }

        const user = await dataSources.db.user.findUnique({
            where: {
                id: dislike.userId
            }
        });

        if (!user) {
            return null;
        }

        const post = await dataSources.db.post.findUnique({
            where: {
                id: dislike.postId
            }
        });

        if (!post) {
            return null;
        }

        return {
            id: dislike.id,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            },
            post: {
                id: post.id,
                title: post.title,
                content: post.content
            }
        };
    } catch (e) {
        return null;
    }
};


