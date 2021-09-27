const fs = require('fs');
const crypto = require('crypto');

const start = Date.now(); //current date in milliseconds

// change the thread pool thread size
//process.env.UV_THREADPOOL_SIZE = 5;

setTimeout(() => console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 finished'));

fs.readFile('test-file.txt', () => {
  console.log('I/O finished');
  console.log('------------------------------');

  setTimeout(() => console.log('Timer 2 finished'), 0);
  setTimeout(() => console.log('Timer 3 finished'), 3000);

  // Gets executed 'immediately' on the next iteration of the event loop
  setImmediate(() => console.log('Immediate 2 finished'));

  // Gets executed on the next clock 'tick' w/in the current event loop
  process.nextTick(() => console.log('Process.nextTick'));

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password1 encrypted');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password2 encrypted');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password3 encrypted');
  });

  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password4 encrypted');
  });

  // takes ~twice as long because the default thread pool size is 4, so this one has to wait for a thread to open up
  // before executing
  crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
    console.log(Date.now() - start, 'Password5 encrypted');
  });
});

console.log('Hello from the top-level code');
