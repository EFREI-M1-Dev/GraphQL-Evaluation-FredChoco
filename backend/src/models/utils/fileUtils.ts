import { createWriteStream } from 'fs';
import path, {dirname} from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Fonction pour télécharger un fichier sur le serveur
export const uploadFile = async (file: any): Promise<string> => {
    // Assurez-vous que le dossier d'upload existe
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    // Récupérez les informations sur le fichier
    const { createReadStream, filename } = await file

    // Déterminez l'emplacement où le fichier sera sauvegardé
    const filePath = path.join(uploadDir, filename);

    // Créez un flux d'écriture pour enregistrer le fichier
    const writeStream = createWriteStream(filePath);

    // Utilisez un promise pour gérer la fin de l'écriture du fichier
    await new Promise((resolve, reject) => {
        createReadStream().pipe(writeStream)
            .on('finish', resolve)
            .on('error', reject);
    });

    // Retournez le chemin d'accès où le fichier a été enregistré
    return filePath;
};
