const express = require('express');
const router =express.Router();
const path = require('path');

// '/add-product' sayfası için bir form gösteriyoruz.
// Bu form, kullanıcıdan bir ürün adı alır ve POST isteğiyle '/product' rotasına gönderir.
router.get('/product', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
});

// '/product' rotası, formdan gelen POST isteğini yakalar.
// body-parser sayesinde req.body nesnesi formdan gelen veriyi içerir.
router.post('/product', (req, res, next) => {
    // Konsola formdan gelen ürün adını yazdırıyoruz
    console.log(req.body); // Örnek çıktı: { productName: 'Bilgisayar' }

    // Ana sayfaya yönlendiriyoruz
    res.redirect('/');
});

module.exports = router;