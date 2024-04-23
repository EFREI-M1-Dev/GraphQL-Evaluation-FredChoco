import { QueryResolvers,User } from "../../../types";
import {consola} from "consola";
import {postSelect} from "../../selectorsPrisma.js";

export const getPost: QueryResolvers["getPost"] = async (_, { id }, { dataSources }) => {
    try {

        const post = await dataSources.db.post.findUnique({
            where: {
                id: id
            },
            include: postSelect
        });

        if (!post) {
            return null;
        }

        return post;

    } catch (e) {
        consola.error(e);
        return null;
    }
};
