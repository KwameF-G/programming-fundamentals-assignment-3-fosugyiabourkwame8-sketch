// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
function readMatrix(rows, cols, matrixName = "Matrix") {
    console.log('\nEntering ${matrixName} (${rows} x ${cols}):');
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let line = readlineSync.question(`Enter row ${i + 1}: `);
        let row = line.trim().split(/\s+/).map(Number);

        while (row.length !== cols || row.some(isNaN)) {
            console.log(`Error: Please enter exactly ${cols} numeric values.`);
            line = readlineSync.question(`Enter row ${i + 1}: `);
            row = line.trim().split(/\s+/).map(Number);
        }
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let rowString = "";
        for (let j = 0; j < matrix[i].length; j++) {
            rowString += matrix[i][j].toString().padStart(6, ' ');
        }
        console.log(rowString);
    }
}

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let transposed = [];

    for (let j = 0; j < cols; j++) {
        let newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }
    return transposed;
}

function runPartA() {
    console.log("=== Part A: Transpose a Matrix ===");
    console.log("PART A - Transpose a Matrix");
    console.log("========================================");

    let rows = parseInt(readlineSync.question("Enter number of rows: "));
    let cols = parseInt(readlineSync.question("Enter number of columns: "));

    let matrix =  readMatrix(rows, cols, "Original Matrix");

    console.log("\nOriginal Matrix:");
    printMatrix(matrix);

    let transposed = transposeMatrix(matrix);

    console.log("\nTransposed Matrix:");
    printMatrix(transposed);
}

function addMatrices(matrixA, matrixB) {
    let rows = matrixA.length;
    let cols = matrixA[0].length;
    let result = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }
    return result;
}

function runPartB() {
    console.log("\n=========================================");
    console.log("=== PART B: Add Two Matrices ===");
    console.log("=========================================");

    let rows = parseInt(readlineSync.question("Enter number of rows (M): "));
    let cols = parseInt(readlineSync.question("Enter number of columns (N): "));

    console.log("\nEntering Matrix A (${rows} x ${cols}):");
    let matrixA = readMatrix(rows, cols, "Matrix A");

    console.log("\nEntering Matrix B (${rows} x ${cols}):");
    let matrixB = readMatrix(rows, cols, "Matrix B");

    let sum = addMatrices(matrixA, matrixB);

    console.log("\nSum of Matrices A and B:");
    printMatrix(sum);
}

function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let colsA = matrixA[0].length;
    let colsB = matrixB[0].length;
    let result = [];

    for (let i = 0; i < rowsA; i++) {
        let row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    return result;
}

function runPartC() {
    console.log("\n=========================================");
    console.log("=== PART C: Multiply Two Matrices ===");
    console.log("=========================================");

    let rowsA = parseInt(readlineSync.question("Enter number of rows for Matrix A (M): "));
    let colsA = parseInt(readlineSync.question("Enter number of columns for Matrix A / rows for Matrix B (N): "));
    let colsB = parseInt(readlineSync.question("Enter number of columns for Matrix B (P): "));

    let matrixA = readMatrix(rowsA, colsA, "Matrix A");
    let matrixB = readMatrix(colsA, colsB, "Matrix B");

    console.log("\nMatrix A:");
    printMatrix(matrixA);

    console.log("\nMatrix B:");
    printMatrix(matrixB);

    let productMatrix = multiplyMatrices(matrixA, matrixB);

    console.log("\nProduct of Matrices A and B:");
    printMatrix(productMatrix);
}

function main() {
    runPartA();
    runPartB();
    runPartC();
}

main();