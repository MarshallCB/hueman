var brotliSize = require('brotli-size');
import fs from 'fs'
import path from 'path'

let str = fs.readFileSync(path.join(process.cwd(),'es.js'))

console.log("Brotli size: " + brotliSize.sync(str))