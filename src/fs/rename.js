import { promises as fs} from 'fs';

const oldPath = "src/fs/files/wrongFilename.txt";
const newPath = "src/fs/files/properFilename.md";
const errorMessage = "FS operation failed";

const rename = async () => {
    try {
        await fs.rename(oldPath, newPath)
    }  catch (err) {
        throw new Error(errorMessage);
    }
};

await rename();