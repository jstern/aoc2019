import * as fs from 'fs';

export function readLines(name: string): string[] {
    let path = `${__dirname}/../../input/${name}.txt`;
    return fs.readFileSync(path, 'utf-8').split('\n').filter(x => x);
}
