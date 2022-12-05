import { createHash} from 'node:crypto';
import { readFile } from 'node:fs/promises';

const filePath = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);

const calculateHash = async () => {
    try {
        const fileText = await readFile(filePath);
        const hash = createHash('sha256').update(fileText);
        console.log(`${hash.digest('hex')} ${filePath}`);
    }  catch (error) {
        throw error;
    }
};

await calculateHash();

