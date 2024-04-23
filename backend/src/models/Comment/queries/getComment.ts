import { QueryResolvers } from "../../../types";

export const getComment: QueryResolvers["getComment"] = async (_, { id }, { dataSources }) => {
    try {
        const comment = await dataSources.db.comment.findUnique({
            where: {
                id: id
            }
        });

        if (!comment) {
            return null;
        }

        const user = await dataSources.db.user.findUnique({
            where: {
                id: comment.userId
            }
        });

        if (!user) {
            return null;
        }

        const post = await dataSources.db.post.findUnique({
            where: {
                id: comment.postId
            }
        });

        if (!post) {
            return null;
        }

        return {
            id: comment.id,
            content: comment.content,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            },
            post: {
                id: post.id,
                title: post.title,
                content: post.content,
                user: {
                    id: user.id,
                    email: user.email,
                    username: user.username
                }
            }
        };
    } catch (e) {
        return null;
    }
};


