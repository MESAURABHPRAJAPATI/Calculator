
function appendCharacter(character) {
    var result = document.getElementById("result");
    result.value += character;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function deleteCharacter() {
    var result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
}

function calculateResult() {
    var result = document.getElementById("result");
    var expression = result.value;

    try {
        result.value = eval(expression);
    } catch (error) {
        result.value = "Error";
    }
}
