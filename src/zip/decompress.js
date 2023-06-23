import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const decompress = async () => {
    const w = createWriteStream("./src/zip/files/fileToCompress.txt");
    const z = createUnzip();
    const r = createReadStream("./src/zip/files/archive.gz");
    r.pipe(z).pipe(w);
};

await decompress();