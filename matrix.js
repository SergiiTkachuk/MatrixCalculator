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

const heigthA = matrixA.length;
const heigthB = matrixB.length;
const widthA = matrixA[0].length;
const widthB = matrixB[0].length;

const heigthC = matrixC.length;
const heigthD = matrixD.length;
const widthC = matrixC[0].length;
const widthD = matrixD[0].length;

let matrixResult = [];
let arrays = [];
rl.prompt();

const commands = {
  help() {
    console.log('Commands:', Object.keys(commands).join(', '));
  },
  printA() {
    console.log(matrixA);
  },
  printB() {
    console.log(matrixB);
  },
  sum() {
    if (heigthA === heigthB && widthA === widthB) {
      for (let i = 0; i < heigthA; i++) {
        for (let j = 0; j < widthA; j++) {
          matrixResult.push(matrixA[i][j] + matrixB[i][j]);
        }
      }

      while (matrixResult.length > 0)
        arrays.push(matrixResult.splice(0, widthB));
    }
    console.log(arrays);
    matrixResult = [];
    arrays = [];
  },
  subtract() {
    if (heigthA === heigthB && widthA === widthB) {
      for (let i = 0; i < heigthA; i++) {
        for (let j = 0; j < widthA; j++) {
          matrixResult.push(matrixA[i][j] - matrixB[i][j]);
        }
      }

      while (matrixResult.length > 0)
        arrays.push(matrixResult.splice(0, widthB));
    }
    console.log(arrays);
    matrixResult = [];
    arrays = [];
  },
  multiplicate() {
    for (let i = 0; i < heigthA; i++) {
      for (let j = 0; j < widthA; j++) {
        matrixResult.push(matrixA[i][j] * a);
      }
    }

    while (matrixResult.length > 0) arrays.push(matrixResult.splice(0, widthB));

    console.log(arrays);
    matrixResult = [];
    arrays = [];
  },
  matrixMultiplicate() {
    const result = [];
    if (widthC !== heigthB) console.log('error');
    for (let i = 0; i < heigthC; i++) result[i] = [];
    for (let k = 0; k < widthD; k++) {
      for (let i = 0; i < heigthC; i++) {
        let t = 0;
        for (let j = 0; j < heigthD; j++) t += matrixC[i][j] * matrixD[j][k];
        result[i][k] = t;
      }
    }
    console.log(result);
  },
  det() {
    const determinant = (matrix) => {
      let result = null;
      if (matrix.length === 1) {
        result = matrix[0, 0];
      } else if (matrix.length === 2) {
        result = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
      } else {
        result = matrix[0].reduce((r, e, i) => r + (-1) ** (i + 2) * e *
      determinant(matrix.slice(1).map((c) => c.filter((_, j) => i !== j))), 0);
      }
      return result;
    };
    console.log(determinant(matrixDet));
  },
  exit() {
    rl.close();
  }
};

rl.on('line', (line) => {
  line = line.trim();
  const command = commands[line];
  if (command) command();
  else console.log('Unknown command');
  rl.prompt();
}).on('close', () => {
  console.log('Bye!');
  process.exit(0);
});
