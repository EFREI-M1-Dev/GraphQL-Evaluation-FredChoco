import { QueryResolvers } from "../../../types";

export const getDislike: QueryResolvers["getDislike"] = async (_, { id }, { dataSources }) => {
    try {
        const post = await dataSources.db.dislike.findUnique({
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


