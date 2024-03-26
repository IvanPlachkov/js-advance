let circle = {
   radiues:4
};

Object.defineProperty(circle,'diameter',{ 
    get: function () {
        return this.radiues*2;
    },
    set: function (value) {
        this.radiues = value / 2
    }
}) ;

console.log(circle.diameter);
circle.diameter =10;

console.log(circle.diameter);