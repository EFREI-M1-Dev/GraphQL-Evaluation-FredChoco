import { QueryResolvers } from "../../../types";
import {userSelect} from "../../selectorsPrisma";

export const getUser: QueryResolvers["getUser"] = async (_, { id }, { dataSources }) => {
    try {
        const user = await dataSources.db.user.findUnique({
            where: {
                id: id
            },
            select: userSelect
        });

        if (!user) {
            return null;
        }

        return user;
    } catch (e) {
        return null;
    }
};


