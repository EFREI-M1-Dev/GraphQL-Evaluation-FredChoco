import { QueryResolvers } from "../../../types";

export const getPost: QueryResolvers["getPost"] = async (_, { id }, { dataSources }) => {
    try {
        const post = await dataSources.db.post.findUnique({
            where: {
                id: id
            }
        });

        if (!post) {
            return null;
        }

        const user = await dataSources.db.user.findUnique({
            where: {
                id: post.userId
            }
        });

        if (!user) {
            return null;
        }

        return {
            id: post.id,
            title: post.title,
            content: post.content,
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        };
    } catch (e) {
        return null;
    }
};
