const fs = require('fs');
const http = require('http');
const url = require('url');


// Blocking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);

// Using a tagged 'Template literal' shown by using the backtick(` `)(grave accent) character
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}\n`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log('File written!');

// Non-blocking, asynchronous (Callback hellish!)
// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('ERROR reading start.txt');
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written.');
//             });
//         });
//     });
// });
// console.log('Will read file!');

/**
 * Section 2.11 Creating a Simple Web Server
 * 
 */
 
// Grab the JSON data from the file globally for this exercise.  We don't want 
// to grab this data on each request.
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// Setup Server
const server = http.createServer((req, resp) => {

    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview') {
        resp.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        resp.end('This is the PRODUCT');
    } else if (pathName === '/api') {
         resp.writeHead(200, {'Content-type': 'application/json'});
         resp.end(data);
    } else {
        // When we redirect to an unknown
        resp.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        resp.end('<h1>Page not Found!</h1>');
    }
});

// Start Server
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});