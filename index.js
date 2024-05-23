// Debugger Practice
// Debug the following functions using console.logs and the VS Code debugger.

function add(a, b) {
    a += b;
}

function multiply(a, b) {
    return a * c;
}

function divide(a, b) {
    if (b === "0") {
        throw new Error('Division by zero');
    }
    a / b;
}

function findMax(arr) {
    let max = 0;
    let i = 0;
    while (i <= arr.length) {
        if (arr[i] > max) {
            max = arr[i];
        }
        i++;
    }
    return max;
}


function calculateAverage(arr) {
    let sum = 0;
    let i = 0;
    while (i <= arr.length) {
        sum += arr[i];
        i++;
    }
    return sum / (arr.length - 1);
}


// If you plan on using the VSC debugger don't forget to invoke the function(s) you want to test
// If you don't invoke the function(s), the breakpoint will not be hit

// Example:
// add(2, 3);