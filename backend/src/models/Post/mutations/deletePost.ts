import {MutationResolvers} from "../../../types";
import consola from "consola";
import path, {dirname} from "path";
import {fileURLToPath} from "url";
import {existsSync, unlinkSync} from "fs";
import {deleteFile} from "../../utils/fileUtils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const deletePost: MutationResolvers["deletePost"] = async (_, {id}, {dataSources}) => {
    try {

        // delete uploaded image
        const post = await dataSources.db.post.findUnique({
            where: {
                id: id
            }
        });

        if (!post) {
            throw new Error('Post not found');
        }

        if (post.imagePath) {
            await deleteFile(post.imagePath);
        }


        const result = await dataSources.db.post.delete({
            where: {
                id: id
            }
        });

        if (!result) {
            throw new Error('Post not found');
        }

        return {
            code: 200,
            success: true,
            message: 'Post has been deleted'
        };
    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message
        };
    }
};
