
# Webpack chunk hash problem

The modules *A*, *B* are separate modules in main entry and vendor module *C* is
separated into entry vendors. Changes in module A, B cause the change of generated
hash even when the chunks modules didn't change.

```
Hash: f48c8a73e96cd93e6548
Version: webpack 1.12.10
Time: 74ms
                          Asset       Size  Chunks             Chunk Names
   main.f48c8a73e96cd93e6548.js  464 bytes       0  [emitted]  main
vendors.f48c8a73e96cd93e6548.js    3.94 kB       1  [emitted]  vendors
[./A.js] ./A.js 66 bytes {0} [built]
[./B.js] ./B.js 66 bytes {0} [built]
[./C.js] ./C.js 66 bytes {1} [built]
   [0] ./index.js 64 bytes {0} [built]
   [0] multi vendors 28 bytes {1} [built]

```

## Install

```npm i```

## Run webpack

```webpack```
