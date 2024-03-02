let result = document.getElementById('result');
let currentInput = '';
function display(value) {
    currentInput += value;
    result.value = currentInput;
}
function solve() {
    try {
        
        result.value = eval(currentInput);
        currentInput = result.value;  
    } catch (error) {
        result.value = 'Error';
        currentInput = '';
    }
}

function clearScreen() {
    result.value = '';
    currentInput = '';
}
