'use strict';

import * as path from 'path';
import * as fs from 'fs';

export let pwd = () => {
    return path.resolve('.');
};

export let isDir = (path) => {
    return fs.lstatSync(path).isDirectory();
};

export let isFile = (path) => {
    return fs.lstatSync(path).isFile();
};

export let notHide = (path) => {
    return path.charAt(0) !== '.';
};

export let isImage = (path) => {
    return /\.(jpg|jpeg|png|gif)$/.test(path);
};

