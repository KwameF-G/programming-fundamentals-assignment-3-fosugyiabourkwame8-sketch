// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 9
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Build a calculator program that runs in the console and performs basic
// arithmetic operations based on the user's input.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_09_simple_calculator.js
//
// -----------------------------------------------------------------------------
// OPERATIONS YOUR CALCULATOR MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Addition          ( + )    e.g.  10 + 3  =  13
//   2. Subtraction       ( - )    e.g.  10 - 3  =  7
//   3. Multiplication    ( * )    e.g.  10 * 3  =  30
//   4. Division          ( / )    e.g.  10 / 3  =  3.33
//   5. Modulus           ( % )    e.g.  10 % 3  =  1  (remainder)
//   6. Exponentiation    ( ** )   e.g.  2 ** 8  =  256
//   7. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        SIMPLE CALCULATOR
//   ============================
//   1. Addition
//   2. Subtraction
//   3. Multiplication
//   4. Division
//   5. Modulus
//   6. Exponentiation
//   7. Quit
//   Select an operation (1-7):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Select an operation (1-7): 4
//   Enter first number : 10
//   Enter second number: 3
//   Result: 10 / 3 = 3.33
//
//   Select an operation (1-7): 4
//   Enter first number : 5
//   Enter second number: 0
//   Error: Cannot divide by zero.
//
//   Select an operation (1-7): 7
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Each arithmetic operation MUST be written as its own function.
// - Use a loop so the calculator keeps running until the user selects Quit.
// - Division by zero must be caught and handled with a clear error message
//   (do NOT let the program crash).
// - Display results to 2 decimal places using .toFixed(2).
// - Handle invalid menu choices gracefully.
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readline = require('readline-sync')

/**
 * Adds two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * Subtracts two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * Divides two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function divide(a, b) {
    return a / b;
}

/**
 * Computes the modulus of two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function modulus(a, b) {
    return a % b;
}

/**
 * Raises a number to a power.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function exponentiate(a, b) {
    return a ** b;
}

/**
 * Formats a numeric result for display.
 * @param {number} value
 * @returns {number|string}
 */
function formatResult(value) {
    return Number.isInteger(value) ? value : value.toFixed(2);
}

function startCalculator() {
    let running = true;

    while (running) {
        console.log('\n==============================');
        console.log('       SIMPLE CALCULATOR        ');
        console.log('================================');
        console.log('1. Addition');
        console.log('2. Subtraction');
        console.log('3. Multiplication');
        console.log('4. Division');
        console.log('5. Modulus');
        console.log('6. Exponentiation');
        console.log('7. Quit');

        const choice = readline.question('Select an operation (1-7): ');

        if (choice.trim() === '7') {
            console.log('Goodbye!');
            running = false;
            break;
        }

        if (!['1', '2', '3', '4', '5', '6'].includes(choice.trim())) {
            console.log('Invalid choice. Please select a number between 1 and 7.');
            continue;
        }

        const num1Input = readline.question('Enter first number : ');
        const num1 = parseFloat(num1Input);

        const num2Input = readline.question('Enter second number: ');
        const num2 = parseFloat(num2Input);

        if (isNaN(num1) || isNaN(num2)) {
            console.log('Error: Please enter valid numerical values.');
            continue;
        }

        let result = 0;
        let symbol = '';

        switch (choice.trim()) {
            case '1':
                result = add(num1, num2);
                symbol = '+';
                break;
            case '2':
                result = subtract(num1, num2);
                symbol = '-';
                break;
            case '3':
                result = multiply(num1, num2);
                symbol = '*';
                break;
            case '4':
                if (num2 === 0) {
                    console.log('Error: Cannot divide by zero.');
                    continue;
                }
                result = divide(num1, num2);
                symbol = '/';
                break;
            case '5':
                if (num2 === 0) {
                    console.log('Error: Cannot divide by 0.');
                    continue;
                }
                result = modulus(num1, num2);
                symbol = '%';
                break;
            case '6':
                result = exponentiate(num1, num2);
                symbol = '**';
                break;
        }

        console.log(`Result: ${num1} ${symbol} ${num2} = ${formatResult(result)}`);
    }
}

startCalculator();