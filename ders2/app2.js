var controllerB = (function(){
    //scope B
    //private
    var firstName="Çağlı";
    var log = function(){
        console.log(this.firstName);
    }

    //public
    return{
        firstName,
        log
    }
})();

console.log(controllerA.firstName);
console.log(controllerB.firstName);

console.log(window);