import { readFile } from 'node:fs/promises';

const errorMessage = 'FS operation failed';
const filePath = new URL('./files/fileToRead.txt', import.meta.url);
const contents = await readFile(filePath, { encoding: 'utf8' });

const read = async () => {
    try {
        await readFile(contents);
        console.log(contents);
    }  catch (err) {
        throw new Error(errorMessage);
    }
};

await read();