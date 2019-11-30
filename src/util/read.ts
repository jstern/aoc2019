import * as fs from 'fs';

function inputPath(name: string): string {
    return `${__dirname}/../../input/${name}.txt`;
}

function readLines(name: string): string[] {
    return fs.readFileSync(inputPath(name), 'utf-8').split('\n').filter(x => x);
}

export { inputPath, readLines };
