const http = require('http');

const server = http.createServer( (req,res) => {
    //console.log(req.url, req.method);

    if(req.url === '/'){
        res.write('Hello');
        res.end(); 
    }

    if(req.url === '/api/products'){
        res.write('Product List');
        res.end();
    }
});

/*
server.on('connection',function(){
    console.log('new connection...');
});
*/

server.listen(3000);
console.log('Listening port on 3000');