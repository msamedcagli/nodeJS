const fs = require('fs');
//--------------------------------------------------------------------------------
/*
const files = fs.readdir('./',function(error, data){
    if (error) {
        console.log(error);
    }else{
        console.log(data);
    }
});

    //çıktı:
    //[ 'app.js', 'app2.js', 'app3.js' ]
*/
//--------------------------------------------------------------------------------
/*
const data = fs.readFile('index.html', 'utf8', function(error, data){
    if (error) {
        console.log(error);
    }else{
        console.log(data);
    }
});

//çıktı:
//<!DOCTYPE html>
//<html lang="en">
//<head>
//    <meta charset="UTF-8">
//    <meta name="viewport" content="width=device-width, initial-scale=1.0">
//    <title>Document</title>
//</head>
//<body>
//    <h1>Hello World</h1>
//</body>
//</html>
*/
//--------------------------------------------------------------------------------
/*
fs.writeFile('deneme.txt','Hello World',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Dosya Oluşturuldu');
    }
});
*/
//--------------------------------------------------------------------------------
/*
fs.appendFile('deneme1.txt','Hello World',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Dosya Oluşturuldu');
    }
});
//writefile dosyanın direkt üstüne yazarken,
// appendfile dosya içeriğinde kaldığı yerden devam ederek yazıyor.
*/
//--------------------------------------------------------------------------------
/*
fs.unlink('deneme1.txt',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Dosya Silindi');
    }
});
*/
//--------------------------------------------------------------------------------
fs.rename('deneme.txt','degistirildi.txt',function(error){
    if(error){
        console.log(error);
    }else{
        console.log('Dosya İsmi Değiştirildi');
    }
});