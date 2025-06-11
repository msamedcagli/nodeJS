
//IIFE
var controllerA = (function(){
    //scope A
    //private
    var age = 20;
    var firstName="Samet";
    var log = function(){
        console.log(this.firstName);
    }

    //public
    return{
        firstName,
        log
    }

})();
//console.log(globalThis.lastName);


 