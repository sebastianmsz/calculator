let firstNum = '';
let operator = '';
let secondNum = '';

/*screen*/
const screenCurrent = document.querySelector('#screenCurrent')
const screenLast = document.querySelector('#screenLast')
/*screen*/

/*numButtons*/
const numButtons = document.querySelectorAll('.numButtons');
numButtons.forEach(button => {
    button.addEventListener('click',()=>{
        if (screenCurrent.textContent == '0' && button.textContent != '.'){
            screenCurrent.textContent = button.textContent;
        } else if (isDotInScreen() && button.textContent == '.' ){
            return;
        } else {{screenCurrent.textContent += button.textContent}}
    })
})
function isDotInScreen(){
    return screenCurrent.textContent.split('').includes('.');
}
/*numButtons*/

/*DeleteClearButtons*/
const clearButton = document.querySelector('#clearButton');
const deleteButton = document.querySelector('#deleteButton');

deleteButton.addEventListener('click', ()=>{
    let screenCurrentList = screenCurrent.textContent.split('');
    if (screenCurrentList.length == 1){
        screenCurrent.textContent = '0';
    } else {screenCurrent.textContent = screenCurrentList.slice(0, -1).join('');}
})

clearButton.addEventListener('click', ()=>{
    screenCurrent.textContent = '0';
    firstNum = 0;
    operator = '';
    secondNum = 0;
    screenLast.textContent = '';
})
/*deleteClearButtons*/

/*operatorButtons*/
const operatorButtons = document.querySelectorAll('.operatorButtons');
const equalButton = document.querySelector('#equalButton')
operatorButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        if (secondNum == '' && operator != '' && firstNum != ''){
            secondNum = screenCurrent.textContent;
            firstNum = Math.round((operate(parseFloat(firstNum), operator
            , parseFloat(secondNum))) * 1000000) / 1000000;
            screenLast.textContent = `${firstNum} ${button.textContent}`
            screenCurrent.textContent = '0';
            operator = button.textContent;
            secondNum = '';
        } else {
            firstNum = screenCurrent.textContent;
            operator = button.textContent;
            screenLast.textContent = `${firstNum}  ${operator}`;
            screenCurrent.textContent = '0';
        }
    })
})

equalButton.addEventListener('click', ()=>{
    if (firstNum == ''){
        return;
    } else {
        secondNum = screenCurrent.textContent;
        screenLast.textContent = `${firstNum}  ${operator} ${secondNum} =`;
        screenCurrent.textContent = Math.round((operate(parseFloat(firstNum)
        , operator, parseFloat(secondNum))) * 1000000) / 1000000;
        firstNum = '';
        secondNum = '';
        operator = '';
    }
})
/*operatorButtons*/

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, operator, num2) {
    switch (operator){
        case '+':
            return sum(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '÷':
            return divide(num1, num2);
        default:
            return multiply(num1, num2);
    }
}