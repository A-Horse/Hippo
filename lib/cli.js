'use strict';

import meow from 'meow';
import {pwd} from './util.js';
import sort from './sort.js';
import server from './server.js';

let cli = meow({
    help: [
        'Usage',
        'boil [ add | remove | version | help]',
        '--------'
    ]
});

cli.run = function(){
    let cmd = this.input[0] || '',
        flags = this.flags;

    switch ( cmd ) {
    case '':
        server(pwd());
        break;
    }

};


export default cli;


