'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> ',

});

const matrixA = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matrixB = [
  [2, 3, 4],
  [5, 6, 7],
  [1, 8, 9],
];
const a = 2;

const matrixC = [
  [1, 2, 3, 7],
  [4, 5, 6, 8],
];
const matrixD = [
  [2, 3],
  [5, 6],
  [1, 8],
  [4, 9],
];
const matrixDet = [
  [1, 3, 7],
  [2, -1, 4],
  [5, 0, 2],
];

