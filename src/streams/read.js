import { createReadStream } from 'node:fs';

const read = async () => {
    const streamReader = createReadStream("./src/streams/files/fileToRead.txt", "utf-8"); 
    streamReader.pipe(process.stdout);
};

await read();