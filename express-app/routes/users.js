const express = require('express');
const router =express.Router();
const path = require('path');

// Bu middleware, tüm gelen GET isteklerini yakalar (örn. '/' gibi)
// Eğer yukarıda tanımlı daha özel bir rota yoksa burası çalışır.
router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','index.html'));
});

module.exports = router;