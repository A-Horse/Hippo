import * as path from 'path';
import * as fs from 'fs';

export function pwd() {
    return path.resolve('.');
};

export function isDir(path) {
    return fs.lstatSync(path).isDirectory();
};

export function isFile(path) {
    return fs.lstatSync(path).isFile();
};

export function notHide(path) {
    return path.charAt(0) !== '.';
};

export function isImage(path) {
    return /\.(jpg|jpeg|png|gif)$/.test(path);
};

