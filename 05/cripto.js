// cripto module
const cripto=require('crypto');
const hash=cripto.createHash('sha256');
hash.update('hello world');
const result=hash.digest('hex');
console.log(result);