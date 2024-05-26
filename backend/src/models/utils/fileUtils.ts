import { v4 as uuidv4 } from 'uuid';
import {createWriteStream, existsSync, mkdirSync, unlinkSync} from 'fs';
import path, {dirname, sep} from 'path';
import { fileURLToPath } from 'url';
import {FileUpload} from "graphql-upload-ts";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import fs from 'fs';

const getUploadDir = () => {
    if(__dirname.split(`${sep}backend${sep}dist`)[1] === undefined){
        return path.join(__dirname.split(`${sep}backend${sep}src`)[0], 'backend', 'uploads');
    } else {
        return path.join(__dirname.split(`${sep}backend${sep}dist`)[0], 'backend', 'uploads');
    }
}

export const uploadFile = async (file: FileUpload): Promise<string> => {
    const uploadDir = getUploadDir();
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true });
    }

    const { createReadStream, filename } = await file
    const uniqueName = `${uuidv4()}-${filename.replace(/ /g, '_')}`;
    const filePath = path.join(uploadDir, uniqueName);
    const writeStream = await createWriteStream(filePath);

    await new Promise((resolve, reject) => {
        createReadStream().pipe(writeStream)
            .on('finish', resolve)
            .on('error', reject);
    });

    if (filePath.includes('dist')) {
        return "dist/uploads/" + uniqueName;
    }

    return "uploads/" + uniqueName;
};

export const deleteFile = async (filePath: string) => {
    const nameFile = filePath.split('/').pop();
    if (nameFile) {
        const uploadDir = getUploadDir();
        const filePath = `${uploadDir}/${nameFile}`;
        if (existsSync(filePath)) {
            await unlinkSync(filePath);
        }
    }
}