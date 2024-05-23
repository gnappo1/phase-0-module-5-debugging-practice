// Debugger Practice
// Debug the following functions using console.logs and the VS Code debugger.

function add(a, b) {
    // += VS +
    // missing return statement
    return a + b;
}

function multiply(a, b) {
    // b in place of c
    return a * b;
}

function divide(a, b) {
    // === VS ==
    // missing return statement
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
}

function findMax(arr) {
    // 0 is not a good default value as there might be negative numbers in the array
    // pick the first element in the array as the default value
    // consequently, start the loop at index 1
    let max = arr[0];
    let i = 1;
    while (i < arr.length) {
        if (arr[i] > max) {
            max = arr[i];
        }
        i++;
    }
    return max;
}


function calculateAverage(arr) {
    // <= VS <
    // we need to divide by all of the elements in the list when calculating the avg
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return sum / (arr.length);
}


// If you plan on using the VSC debugger don't forget to invoke the function(s) you want to test
// If you don't invoke the function(s), the breakpoint will not be hit

// Example:
// add(2, 3);