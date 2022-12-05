import { writeFile, access } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __fileName = fileURLToPath(import.meta.url);
const __dirname = dirname(__fileName);

const create = async () => {
    const src = __dirname + '/files/fresh.txt';
    const existMsg = 'FS operation failed';
    const expectedText = 'I am 2fresh and young';
    try {
        await writeFile(src, expectedText, { flag: 'wx' });
    } catch (err) {
        throw new Error(existMsg);
    }

};

await create();