import { readFile } from 'node:fs/promises';

const errorMessage = 'FS operation failed';
const filePath = "src/fs/files/fileToRead.txt";

const read = async () => {
    try {
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    }  catch (err) {
        throw new Error(errorMessage);
    }
};

await read();