import { QueryResolvers } from "../../../types";

export const getUser: QueryResolvers["getUser"] = async (_, { id }, { dataSources }) => {
    try {
        const user = await dataSources.db.user.findUnique({
            where: {
                id: id
            }
        });

        if (!user) {
            return null;
        }

        return {
            id: user.id,
            username: user.username,
            email: user.email
        }
    } catch (e) {
        return null;
    }
};


