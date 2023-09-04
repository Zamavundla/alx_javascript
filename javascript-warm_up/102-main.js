#!/ usr/bin/node
const { addMeMaybe } = require("./102-add_me_maybe");

function myFunction(number){
    console.log("New value" + number);
}

addMeMaybe(4, myFunction);