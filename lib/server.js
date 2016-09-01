import express from 'express';

import * as fs from 'fs';
import * as path from 'path';

import {pwd, isDir, isFile, notHide, isImage} from './util.js';


let app = express();

const port = 8877;


app.use(express.static('www'));

app.use('/images', express.static(pwd()));

export default (rootPath) => {

    app.get('/root', (req, res) => {
        fs.readdir(rootPath, (err, files) => {
            let imagePaths = files.filter(isFile)
                .filter(notHide)
                .filter(isImage);

            
            res.send({
                images: imagePaths,
                dirs: []
            });
        });
    });

    app.get('tellme', (req, res) => {
        let dirPath = req.query.dirPath;
        
        fs.readdir(path.join(rootPath, dirPath), (err, files) => {
            let imagePaths = files.filter(isFile)
                .filter(notHide)
                .filter(isImage)
                .map((name) => path.join(dirPath, name));
            
            res.send({
                images: imagePaths,
                dirs: []
            });
        });
        
    });
    
    app.listen(port);
};


