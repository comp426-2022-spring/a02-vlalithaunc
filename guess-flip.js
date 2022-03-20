//import coinFlips function
import {flipACoin} from './modules/coin.mjs';

import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const args = require('minimist')(process.argv.slice(2));

const err = new Error("Error: no input.\nUsage: node guess-flip --call=[heads|tails]");

if(args.call == null || (args.call != "heads" && args.call != "tails")){
    console.error(err.message);
}
else{
    console.log(flipACoin(args.call));
}



