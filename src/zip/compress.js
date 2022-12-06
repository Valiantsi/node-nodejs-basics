import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const r = createReadStream("./src/zip/files/fileToCompress.txt");
    const z = createGzip();
    const w = createWriteStream("./src/zip/files/archive.gz");
    r.pipe(z).pipe(w);
};

await compress();
