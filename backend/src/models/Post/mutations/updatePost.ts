import {MutationResolvers} from "../../../types";
import consola from "consola";
import {createJWT} from "../../../modules/auth";
import {postSelect} from "../../selectorsPrisma.js";
import {deleteFile, uploadFile} from "../../utils/fileUtils.js";

export const updatePost: MutationResolvers["updatePost"] = async (_, {id, input}, {dataSources}) => {
    try {

        const currentPost = await dataSources.db.post.findUnique({
            where: {id},
            select: postSelect
        });

        if (!currentPost) {
            return {
                code: 404,
                success: false,
                message: 'Post not found',
                post: null,
            };
        }

        const hasFile = !!input.file;
        let imagePath = "";
        if (hasFile) {
            imagePath = await uploadFile(input.file);
            await deleteFile(currentPost.imagePath);
        }

        const updatedPost = await dataSources.db.post.update({
            where: {id},
            data: {
                title: input.title,
                content: input.content,
                ...(hasFile && {imagePath: imagePath})
            },
            select: postSelect
        });


        return {
            code: 200,
            success: true,
            message: 'Post has been updated',
            post: updatedPost,
        };


    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            post: null,
        };
    }
};
