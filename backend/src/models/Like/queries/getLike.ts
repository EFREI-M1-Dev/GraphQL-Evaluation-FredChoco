import { QueryResolvers } from "../../../types";

export const getLike: QueryResolvers["getLike"] = async (_, { id }, { dataSources }) => {
    try {
        const post = await dataSources.db.like.findUnique({
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


