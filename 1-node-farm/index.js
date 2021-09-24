const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = require('./starter/modules/replaceTemplate');


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

const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8');


const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

// Setup Server
const server = http.createServer((req, resp) => {

    //console.log(req.url);
    //console.log(url.parse(req.url, true));

    const { query, pathname } = url.parse(req.url, true);

    // Overview Page
    if(pathname === '/' || pathname === '/overview') {
        resp.writeHead(200, {'Content-type': 'text/html'});

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCard, el)).join('');
        //console.log(cardsHtml);
        const output = tempOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        resp.end(output);
    
    // Product Page
    } else if (pathname === '/product') {
        resp.writeHead(200, {'Content-type': 'text/html'});
        // Retrieve element base on query string
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct, product);

        resp.end(output);
    
    // API
    } else if (pathname === '/api') {
         resp.writeHead(200, {'Content-type': 'application/json'});
         resp.end(data);
    
    // Not Found
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