const http = require('http');           // HTTP sunucusu oluşturmak için Node'un yerleşik modülü
const routes = require('./routes');     // routes.js dosyasındaki route handler'ı içe aktar

// HTTP sunucusunu oluşturuyoruz ve gelen istekleri routes fonksiyonuna yönlendiriyoruz
const server = http.createServer(routes);

// Sunucuyu 3000 portunda başlatıyoruz
server.listen(3000);

console.log('Listening port on 3000');  // Terminale sunucunun başlatıldığını yazar
