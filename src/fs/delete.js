import { unlink } from 'node:fs';

const errorMessage = "FS operation failed";
const filePath = new URL('./files/fileToRemove.txt', import.meta.url);

const remove = async () => {
    unlink(filePath, (err) => {
        if (err) throw new Error(errorMessage);
        console.log(`${filePath} was deleted`);
    });
};

await remove();