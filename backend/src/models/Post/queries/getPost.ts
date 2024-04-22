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

        return post;
    } catch (e) {
        return null;
    }
};


