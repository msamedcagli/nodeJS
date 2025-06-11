const Logger = require('./logger');
const logger =new Logger();
//listener Kaydet
logger.on('connection',function(args){
    console.log('Bağlantı Kuruldu.',args);
});


logger.log('Kullanıcı Giriş Yaptı.');
