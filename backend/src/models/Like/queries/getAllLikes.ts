import {QueryResolvers} from "../../../types";
import consola from "consola";

export const getAllLikes: QueryResolvers["getAllLikes"] = async (_, __, {dataSources}) => {

    try {
        const likes = await dataSources.db.like.findMany();
        return {
            code: 200,
            success: true,
            message: 'Likes have been fetched',
            likes
        }
    } catch (e) {
        consola.error(e as Error);
        return {
            code: 404,
            success: false,
            message: (e as Error).message,
            likes: null
            }
    }
}