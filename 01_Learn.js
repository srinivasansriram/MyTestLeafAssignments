const { Console } = require("console");

const browser = "chrome";

function getbrowserVersion() {

    if (browser ==='chrome') {

        var browserversion = '172.54.43';
        
    }
    
    console.log(browserversion);
    return browserversion;
}

getbrowserVersion();