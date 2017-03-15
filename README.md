# typescript-nodejs-webpack-starter
a node.js lib starter with typescript and webpack


To build:

npm run build


To use:

In other typescript project folder:

npm link /path/to/this/lib

In other typescript project code:

import {exampleClass,tools} from "myLib";

let example:exampleClass = new exampleClass();//it works!

let plusResult = tools.plus(2,3);//5
