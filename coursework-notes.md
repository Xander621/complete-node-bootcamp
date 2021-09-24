
# Installing Node.js (LTS) for Ubuntu 20.04

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## You may also need development tools to build native addons

     sudo apt-get install gcc g++ make

## To install the Yarn package manager, run

     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
     echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn

# Important Links Used During This Course

1. Use this [Markdown Guide](https://www.markdownguide.org/basic-syntax/) for creating this style guide
2. The official [Node.js v14.x Documentation](https://nodejs.org/dist/latest-v14.x/docs/api/)

# Complete Node Bootcamp Course Notes

## Section 1

### Installing Node.js (LTS) for Ubuntu 20.04

* Install Node.js LTS for Ubuntu

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### You may also need development tools to build native addons

```
sudo apt-get install gcc g++ make
```

### To install the Yarn package manager, run

```
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

## Section 2

### 2.5 What Is Node.js and Why Use It?

Node is a ***javascript runtime*** running on Google's ***Open-source V8 Javascript Engine***.
Gets JS out of the browser.
Can access the filesystem

PROS:

* Node.js is single threaded, based on event driven, non-blocking I/O model
* Perfect for building **fast** and **scalable** data-intesive apps
* Companies like Netflix, Uber, Paypal and ebay have started using node in production
* ***JavaScript across the entire stack***: faster and more efficient development
* **NPM**: huge library of open-source packages avail for everyone, for free
* **Very active** developer community
USE NODE.JS:
* API w/ database behind it ( preferably NoSQL )
* Data streaming ( think YouTube )
* Real-time chat application
* Server-side web application
DO NOT USE NODE.JS:
* Applications w/ heavy server-side processing (CPU-intensive)
  * Ruby
  * PHP
  * Python

### 2.6 Running Javascript Outside The Browser

Using code folder ***1-node-farm***

* Open VSCODE terminal: ctrl + backtick
* Open node by typing `node`
  * This opens the Read-Eval-Print-Loop ([REPL](https://nodejs.org/dist/latest-v14.x/docs/api/repl.html)) interface
* Close node by typing `.exit` or `ctrl+d`
* Hitting `Tab` will list all global variables known to node
* underscore variable `_` contains the previous result

### 2.7 Using Modules 1: Core Modules

To use a node module store the result of the `require()` method into a local variable

```node
const fs = require('fs');
```

See [File System Documentation](https://nodejs.org/dist/latest-v14.x/docs/api/fs.html) for the above require statement

### 2.8 Reading and Writing Files

Using ***ES6*** Template literals (Template strings)
see [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for more.

### 2.9 Blocking and Non-Blocking: Asynchronous Nature of Node.js

using fs.readFile instead of fs.readFileSync to implement the 'Non-blocking I/O model'

A node process is single threaded.

Prevent Callback Hell

* ES6 Promises
* ES8 Sync await

### 2.10 Reading and Writing Files: Asynchoronously

See [Node Knowledge: What are callbacks?](https://nodejs.org/en/knowledge/getting-started/control-flow/what-are-callbacks/)

using [Arrow Function Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) () => {}
