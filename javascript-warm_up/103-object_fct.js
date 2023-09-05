#!/ usr/bin/node

const myObject = {
    type: "object",
    value: 12,
};

const myObjectIncr = { 
    type: "object",
    value: 13,
    incr: function() {
        this.value++;
    }
};

console.log(myObject);
console.log(myObjectIncr);
myObjectIncr.incr();
console.log(myObjectIncr);
myObjectIncr.incr();
console.log(myObjectIncr);
