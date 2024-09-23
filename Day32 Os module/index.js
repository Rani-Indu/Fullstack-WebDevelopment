const os = require('os');
const { Interface } = require('readline');

// console.log("CPU Architecture: " + os.arch());

// console.log("Free Memory: " + os.freemem());

// console.log("Total memory: " + os.totalmem());

console.log("Network interface: " + os.networkInterfaces());

console.log("Network interface: " + JSON.stringify(os.networkInterfaces()));


// console.log("OS default temp dir: " + os.tmpdir());

// console.log("Endianess: " + os.endianness());

// console.log("Hostname: " + os.hostname());

// console.log("OS type:" + os.type());

// console.log("OS Platform: " + os.platform);

// console.log("OS release: " + os.release());