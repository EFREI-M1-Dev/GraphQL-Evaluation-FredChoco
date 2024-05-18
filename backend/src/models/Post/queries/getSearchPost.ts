import {Post, QueryResolvers, User} from "../../../types";
import consola from "consola";
import {dislikeSelect, likeSelect, postSelect} from "../../selectorsPrisma.js";

export const getSearchPost: QueryResolvers["getSearchPost"] = async (_, {input}, {dataSources}) => {

    try {
        return await dataSources.db.post.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: input
                        }
                    },
                    {
                        content: {
                            contains: input
                        }
                    }
                ]
            },
            select: postSelect,
            take: 10
        });

    } catch (e) {
        consola.error(e as Error);
        return [];
    }
}