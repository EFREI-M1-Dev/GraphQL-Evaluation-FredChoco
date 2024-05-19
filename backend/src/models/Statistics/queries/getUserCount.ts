import { QueryResolvers } from "../../../types";
import {consola} from "consola";
import {userSelect} from "../../selectorsPrisma.js";

export const getUserCount: QueryResolvers["getUserCount"] = async (_, __, { dataSources }) => {
    try {
        const users = await dataSources.db.user.findMany({
            select: userSelect,
        });

        return users.length;

    } catch (e) {
        consola.error(e);
        return 0;
    }
};
