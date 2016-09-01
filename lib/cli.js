import meow from 'meow';
import sort from './sort.js';
import server from './server.js';
import {pwd} from './util.js';

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

  switch (cmd) {
  case '':
    break;
  default:
    break
  }
};


export default cli;


