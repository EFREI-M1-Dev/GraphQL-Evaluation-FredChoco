import {QueryResolvers} from "../../../types";
import {dislikeSelect} from "../../selectorsPrisma";

export const getDislike: QueryResolvers["getDislike"] = async (_, {id}, {dataSources}) => {
    try {
        const dislike = await dataSources.db.dislike.findUnique({
            where: {
                id: id
            },
            include: dislikeSelect
        });

        if (!dislike) throw new Error('Dislike not found');

        return dislike
    } catch (e) {
        return null;
    }
};


