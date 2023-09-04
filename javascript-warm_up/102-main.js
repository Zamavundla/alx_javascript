#!/ usr/bin/node
const addMeMaybe = require("./102-add_me_maybe").addMeMaybe;

function myFunction(number){
    console.log("New value" + " " + number);
}

addMeMaybe(5, myFunction);