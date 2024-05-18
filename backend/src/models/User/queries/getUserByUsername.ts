import { QueryResolvers } from "../../../types";
import {userSelect} from "../../selectorsPrisma.js";

export const getUserByUsername: QueryResolvers["getUserByUsername"] = async (_, { username }, { dataSources }) => {
    try {
        const user = await dataSources.db.user.findUnique({
            where: {
                username: username
            },
            select: userSelect
        });

        return user || null;
    } catch (e) {
        return null;
    }
};


