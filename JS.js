function appendToResult(value) {
    document.getElementById("result").value += value;
}

function clearResult() {
    document.getElementById("result").value = "";
}
function clearLastValue() {
    let currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}
function calculateResult() {
    const expression = document.getElementById("result").value;
    if (expression === "") {
        return;
    }
    try {
        const result = eval(expression);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}
function calculateSquareRoot() {
    const expression = document.getElementById("result").value;
    if (expression === "") {
        return;
    }
    try {
        const result = Math.sqrt(eval(expression));
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}