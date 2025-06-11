const EventEmitter = require('events');
class Logger extends EventEmitter{
    
    log(message){
    console.log(message);
    
    //eventi tetikle
    this.emit('connection',{ id:1,message:'hello'});
    }
}

module.exports = Logger;
