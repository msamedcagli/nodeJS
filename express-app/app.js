// Express.js web framework'ünü kullanarak basit bir web sunucusu oluşturuyoruz
const express = require('express');
const app = express();

// body-parser modülü, gelen HTTP isteklerindeki verileri (form verileri, JSON verileri vs.)
// kolayca alabilmemizi sağlar. Örneğin bir POST formundan gelen verileri req.body ile okumamıza imkan tanır.
const bodyParser = require('body-parser');
const adminRoutes =require('./routes/admin');
const usersRoutes =require('./routes/users');
// urlencoded veriyi ayrıştırmak için middleware tanımlıyoruz
// extended: false -> sade yapıdaki verileri (string gibi) işler, nested (iç içe) nesneleri işlemez.
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/admin',adminRoutes);
app.use(usersRoutes);

app.use((req,res)=>{
    res.status(404);
    res.send('<h1>Page not found</h1>');
});

// Sunucuyu 3000 portunda başlatıyoruz
app.listen(3000, () => {
    console.log('Port dinleniyor: 3000');
});
