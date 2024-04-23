import { QueryResolvers } from "../../../types";

export const getLike: QueryResolvers["getLike"] = async (_, { id }, { dataSources }) => {
    try {
        const like = await dataSources.db.like.findUnique({
            where: {
                id: id
            }
        });

        if (!like) {
            return null;
        }

        const user = await dataSources.db.user.findUnique({
            where: {
                id: like.userId
            }
        });

        if (!user) {
            return null;
        }

        const post = await dataSources.db.post.findUnique({
            where: {
                id: like.postId
            }
        });

        if (!post) {
            return null;
        }

        return {
            id: like.id,
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


