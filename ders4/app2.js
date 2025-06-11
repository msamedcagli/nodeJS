const url = require('url');

const address = 'https://github.com/msamedcagli/nodeJS';

let result = url.parse(address,true);
console.log(result);

/* 
çıktı:

Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/msamedcagli/nodeJS',
  path: '/msamedcagli/nodeJS',
  href: 'https://github.com/msamedcagli/nodeJS'
}

*\
