const path = require("path");
// console.log(path.sep);

// console.log(process.env.PATH);

// console.log(path.delimiter);

const filePath1 = '/public_html/home/index.html';

const currentFilePath =  __filename;
// console.log(currentFilePath);

const currentFilePath1 =  __dirname;
// console.log(currentFilePath1);

let basename = path.basename(currentFilePath);
// console.log("basename", basename);

let basenameWithoutExt = path.basename(currentFilePath, '.js');
// console.log("basenameWithoutExt", basenameWithoutExt);

let dirname = path.dirname(currentFilePath);
// console.log("dirname :", dirname);

// console.log('ext1 >', path.extname(currentFilePath));
// console.log('ext2 >', path.extname('index.md.js'));

let pathToFile = path.format({
    dir: '/public_html/home',
    base: 'index.html'
});
// console.log('pathToFile :', pathToFile);

// console.log('IsAbsolute : ', path.isAbsolute(currentFilePath));
// console.log('IsAbsolute : ', path.isAbsolute('/index.js'));
// console.log('IsAbsolute : ', path.isAbsolute('./index.js'));  // . means current directory ke andar index.js so relative filepath
// console.log('IsAbsolute : ', path.isAbsolute('../index.js')); // .. indicates relative filepath

let pathToDir = path.join('/home', 'js', 'dist', 'index.js',);
// console.log('pathToDir :', pathToDir);

// console.log('currentFilePath : ',currentFilePath);
// console.log('parse >', path.parse(currentFilePath));

// console.log('relative path :', path.relative('/home/user/config', '/home/user/js'));

const currentFilePath2 =  __dirname;
console.log('currentFilePath2 : ',currentFilePath2);

console.log('resolve:', path.resolve());

console.log('normalize :', path.normalize('//home//user//js'));