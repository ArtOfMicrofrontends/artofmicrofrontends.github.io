import { writeFileSync, readFileSync, mkdirSync } from 'fs';
import { basename, resolve } from 'path';
import { createHash } from 'crypto';

const assets: Array<[content: Buffer, name: string]> = [];
const extensions = ['.png', '.jpg', '.webp'];

function installExtension(ext: string) {
  require.extensions[ext] = (module, filename) => {
    const content = readFileSync(filename);
    const value = createHash('sha1').update(content);
    const hash = value.digest('hex').substring(0, 6);
    const name = basename(filename).replace(ext, `.${hash}${ext}`);
    assets.push([content, name]);
    module.exports.default = name;
  };
}

extensions.forEach(installExtension);

export function addAsset(content: Buffer, name: string) {
  assets.push([content, name]);
}

export function writeAssets(dist: string) {
  mkdirSync(dist, { recursive: true });
  assets.forEach(([content, name]) => writeFileSync(resolve(dist, name), content));
  assets.splice(0, assets.length);
}
