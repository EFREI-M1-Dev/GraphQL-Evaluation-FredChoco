import { QueryResolvers } from "../../../types";

export const getComment: QueryResolvers["getComment"] = async (_, { id }, { dataSources }) => {
    try {
        const post = await dataSources.db.comment.findUnique({
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


