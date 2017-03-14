# typescript-nodejs-webpack-starter
a node.js lib starter with typescript and webpack

To build:
npm run build

To use:
In other typescript project folder:
  npm link /path/to/this/lib
In other typescript project code:
  import {exampleClass} from "myLib";
  let example:exampleClass = new exampleClass();
