const fs = require('fs');               // Dosya işlemleri için (okuma/yazma)
const qs = require('querystring');      // POST verisini ayrıştırmak için

// Tüm gelen istekleri yöneten fonksiyon
const routeHandler = (req, res) => {
    const url = req.url;                // Gelen isteğin URL'sini al
    const method = req.method;          // Gelen isteğin HTTP metodunu (GET, POST, vs.) al

    res.setHeader('Content-Type', 'text/html');  // Yanıtın HTML içeriği olduğunu belirtiyoruz
    // Kullanıcı ana sayfaya gelirse formu göster
    if (url === '/') {
        res.write(`
            <html>
                <head>
                    <title>Enter Message</title>
                </head>
                <body>
                    <form method="POST" action="/log">
                        <input type="text" name="message"> <!-- Kullanıcının mesaj gireceği alan -->
                        <button type="submit">Save</button> <!-- Formu göndermek için buton -->
                    </form>
                </body>
            </html>
        `);
        return res.end();  // Yanıtı sonlandır
    }
    // Eğer kullanıcı formu gönderirse (/log adresine POST isteği)
    if (url === '/log' && method === 'POST') {
        const body = [];  // Gelen veri parçalarını (chunk) tutmak için bir dizi

        // Veri geldiğinde (parça parça olabilir) body dizisine ekle
        req.on('data', (chunk) => {
            body.push(chunk);
            console.log(chunk);  // Ham veriyi (Buffer) konsola yaz
        });

        // Tüm veri alımı bittiğinde
        req.on('end', () => {
            const bodyParsed = Buffer.concat(body).toString(); // Parçaları birleştir ve string'e çevir

            const parsedData = qs.parse(bodyParsed);  // querystring modülü ile veriyi ayrıştır
            const message = parsedData.message;       // formda name="message" olan alanın değerini al

            console.log(parsedData);  // Ayrıştırılmış veriyi konsola yaz (örneğin: { message: 'selam' })

            // Mesajı 'message.txt' dosyasına yeni satır olarak ekle
            fs.appendFileSync('message.txt', message + '\n');
        });

        // Kullanıcıyı ana sayfaya yönlendir
        res.statusCode = 302;             // 302: Geçici yönlendirme
        res.setHeader('Location', '/');   // Yönlendirme adresi
        return res.end();                 // Yanıtı sonlandır
    }
}

module.exports = routeHandler; 

    
