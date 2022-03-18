//import coinFlips function
import {flipACoin} from './modules/coin.mjs';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

if(args.call == null){
    throw new Error("no input");
}
else{
    console.log(flipACoin(args.call));
}



