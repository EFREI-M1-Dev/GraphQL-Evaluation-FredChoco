import {QueryResolvers} from "../../../types";
import {userSelect} from "../../selectorsPrisma.js";

export const getLoggedUser: QueryResolvers["getLoggedUser"] = async (_, __, {user}) => {
    try {
        return user;
    } catch (e) {
        console.error(e as Error);
        return null;
    }
};


