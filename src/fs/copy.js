import { promises as fs} from 'fs';

const copy = async () => {
    const destDir = "src/fs/files_copy";
    const srcDir = "src/fs/files";
    const errorMessage = "FS operation failed"; 

    try {
        await fs.mkdir(destDir);   
        await fs.cp(srcDir, destDir, {recursive: true});  
    }  catch (err) {
        throw new Error(errorMessage);
    }
    
};

copy();