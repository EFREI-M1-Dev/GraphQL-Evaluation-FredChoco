import { v4 as uuidv4 } from 'uuid';
import {createWriteStream, existsSync, mkdirSync, unlinkSync} from 'fs';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import {FileUpload} from "graphql-upload-ts/dist/Upload";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const uploadFile = async (file: FileUpload): Promise<string> => {
    const uploadDir = path.join(__dirname, '../../../uploads');
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir, { recursive: true });
    }

    const { createReadStream, filename } = await file
    const uniqueName = `${uuidv4()}-${filename.replace(/ /g, '_')}`;
    const filePath = path.join(uploadDir, uniqueName);
    const writeStream = createWriteStream(filePath);

    await new Promise((resolve, reject) => {
        createReadStream().pipe(writeStream)
            .on('finish', resolve)
            .on('error', reject);
    });

    return "uploads/" + uniqueName;
};

export const deleteFile = async (filePath: string) => {
    const nameFile = filePath.split('/').pop();
    if (nameFile) {
        const uploadDir = path.join(__dirname, '../../../uploads');
        const filePath = `${uploadDir}/${nameFile}`;
        if (existsSync(filePath)) {
            await unlinkSync(filePath);
        }
    }
}