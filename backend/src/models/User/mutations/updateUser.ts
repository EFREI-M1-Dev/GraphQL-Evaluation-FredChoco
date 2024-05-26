import {MutationResolvers} from "../../../types";
import consola from "consola";
import {createJWT} from "../../../modules/auth.js";
import {deleteFile, uploadFile} from "../../utils/fileUtils.js";

export const updateUser: MutationResolvers["updateUser"] = async (_, {id, input}, {dataSources, user}) => {
    try {

        const hasFile = !!input.file;
        let imagePath = "";
        if (hasFile && user && input.file) {
            imagePath = await uploadFile(input.file);
            if (user.imagePath && user.imagePath !== "") await deleteFile(user.imagePath);
        }


        const userExists = await dataSources.db.user.findFirst({
            where: {
                OR: [
                    { username: input.username },
                    { email: input.email }
                ]
            }
        });

        if(userExists) {
            return {
                code: 400,
                success: false,
                message: 'Username or email already exists',
                user: null
            }
        }

        const updatedUser = await dataSources.db.user.update({
            where: {id},
            data: {
                username: input.username,
                email: input.email,
                ...(hasFile && {imagePath: imagePath})
            }
        });

        const newToken = createJWT(updatedUser);

        return {
            code: 200,
            success: true,
            message: 'User has been updated',
            user: updatedUser,
            token: newToken
        };


    } catch (e) {
        consola.error(e as Error);
        return {
            code: 500,
            success: false,
            message: (e as Error).message,
            user: null,
            token: null
        };
    }
};
