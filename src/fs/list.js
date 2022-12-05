import { readdir } from 'node:fs/promises';

const path = "src/fs/files";
const errorMessage = "FS operation failed"; 

const list = async () => {
    try {
        const files = await readdir(path);
        for (const file of files)
        console.log(file);
    } catch (err) {
        throw new Error(errorMessage);
    }
};

await list();