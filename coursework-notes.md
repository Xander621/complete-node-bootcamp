
# Installing Node.js (LTS) for Ubuntu 20.04

```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```
## You may also need development tools to build native addons:
     sudo apt-get install gcc g++ make
## To install the Yarn package manager, run:
     curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | gpg --dearmor | sudo tee /usr/share/keyrings/yarnkey.gpg >/dev/null
     echo "deb [signed-by=/usr/share/keyrings/yarnkey.gpg] https://dl.yarnpkg.com/debian stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
     sudo apt-get update && sudo apt-get install yarn

# Complete Node Bootcamp Course Notes

## Section 1

### Installing Node.js (LTS) for Ubuntu 20.04 

* Install Node.js LTS for Ubuntu
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```
### You may also need development tools to build native addons:
```
sudo apt-get install gcc g++ make
```
### To install the Yarn package manager, run:
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
Using VSCode Terminal ctrl + backtick
Open node by typing `node` 
This opens the node *REPL* interface
* R - Read
* E - Eval
* P - Print
* L - Loop

