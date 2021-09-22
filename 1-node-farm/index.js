const fs = require('fs');


// Blocking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// Using a tagged 'Template literal' shown by using the backtick(` `)(grave accent) character
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}\n`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous (Callback hellish!)
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    if(err) return console.log('ERROR reading start.txt');
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                console.log('Your file has been written.');
            });
        });
    });
});
console.log('Will read file!');