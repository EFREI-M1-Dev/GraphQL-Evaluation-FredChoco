import { MutationResolvers } from "../../../types";
import consola from "consola";
import { postSelect } from "../../selectorsPrisma.js";
import { uploadFile } from "../../utils/fileUtils.js";

export const createPost: MutationResolvers["createPost"] = async (_, { title, content, userId, file }, { dataSources }) => {
    try {
        let imagePath = "";
        if (file) {
            imagePath = await uploadFile(file);
        }


        const createdPost = await dataSources.db.post.create({
            data: {
                title: title,
                content: content,
                user: {
                    connect: {
                        id: userId
                    }
                },
                imagePath: imagePath
            },
            select: postSelect
        });

        if (!createdPost) {
            throw new Error('Failed to create post');
        }

        return {
            code: 200,
            success: true,
            message: 'Post has been created',
            post: createdPost
        }
    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            post: null
        }
    }
}
