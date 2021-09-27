# Section 4: How Node.js Works: A look Behind the Scenes

## Node Architecture

Node Dependencies

- Google V8 Javascript engine
  - converts js code to machine code
  - written in JS & C++
- libuv
  - opensource library focused on IO
  - implments the eventloop and threadpool
  - written completely in C++

## Processes, Threads and the Thread Pool

A Node application runs in a single thread.

- Init program
- Exe "top-level" code
- Require modules
- REgister event callbacks
- Start event loop

Thread Pool is designed to do the heavy lifting for a node application outstide of the eventloop.

- Consists of an additional 4 threads (or more)
- offload work from the event loop
- handle heavy "expensive" tasks:
  - file system apis
  - crypto
  - compression
  - DNS lookup

## The Node.js Event Loop

|--------------------------------------------------------------------|
|                           NODE.JS PROCESS                          |
|--------------------------------------------------------------------|
|                                                                    |
|   |-------------------------------|                                |
|   |         SINGLE THREAD         |                                |
|   |-------------------------------|                                |
|   |                               |                                |
|   |   |-----------------------|   |                                |
|   |   |       EVENT LOOP      |   |          THREAD POOL           |
|   |   |-----------------------|   |   |-----------| |-----------|  |
|   |   |                       |   |   | THREAD #1 | | THREAD #2 |  |
|   |   |                       |   |   |-----------| |-----------|  |
|   |   |                       |   |                                |
|   |   |                       |   |   |-----------| |-----------|  |
|   |   |                       |   |   | THREAD #3 | | THREAD #4 |  |
|   |   |                       |   |   |-----------| |-----------|  |
|   |   |                       |   |                                |
|   |   |                       |   |                                |
|   |   |                       |   |                                |
|   |   |-----------------------|   |                                |
|   |                               |                                |
|   |-------------------------------|                                |
|                                                                    |
|--------------------------------------------------------------------|

1st thing to know is the event loop is where all application code that is inside the callback functions is executed, i.e.
all code that is not top-level code

- Heart of the Node arch

Node.js is built around callback functions

Event driver arch

- events are emitted
- event loop picks them up
- callbacks are called

Event loop provides orchestration by _offloading_ heavy tasks to the thread pool.

### The event loop in detail

Four phases:

- Expired timer callbacks - takes care of callbacks from expired timers
- I/O polling and callbacks (99% of code gets done here)
- setImmediate callbacks
- close callbacks - all close events are processed here

Special handling queues - These get handled on the next clock event (tick) w/in the event loop whenever they are received.

- PROCESS.NEXTTICK() QUEUE
  - used when a process needs to be execute a certain callback after the current event phase (advanced use case)
- other microtasks queue (Resolve promises)

Event loop will continue as long as there are existing running timers for callbacks... if none, then the event loop will  
exit the application.

### Summary of the Event Loop:

Don't block the event loop by:

- don't use sync versions of functions in fs, crypto and zlib modules in your callback functions
- don't perform complex calculations ( i.e loops inside loops)
- Be careful with JSON in large objects
- Don't use too complex regular expressions ( i.e. nested quantifiers)

## The Event-Driven Architecture

Implementation of the Observer Pattern of JS

## Introduction to Streams

Streams - used to process(read and write) data piece by piece (chunks), w/o completing the whole read or write operation,
allowing for not keeping all the data in memory

- perfect for handling large volumes of data, for example videos
- more effcient data processing in terms of memory (no need to kepp all data in memory) and time (we don't have to wait until all the data is available)

Types of streams

- Readable Streams - streams from which we can read (consume) data
  - examples
    - http requests ( data events)
    - fs read streams ( end events)
  - important events
    - data
    - end
  - important functions
    - pipe()
    - read()
- Writable Streams - streams to which we can write data
  - examples
    - http response
    - fs write streams
  - important events
    - drain
    - finish
  - important functions
    - write()
    - end()
- Duplex Streams - streams that are both readable and writable
  - examples
    - net web socket
- Transform Streams - Duplex streams that transform data as it is written or read
  - examples
    - zlib Gzip creation
