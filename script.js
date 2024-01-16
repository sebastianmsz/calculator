let firstNum = 0;
let operator = '';
let secondNum = 0;

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
    console.log(screenCurrentList);
    if (screenCurrentList.length == 1){
        clearButton.dispatchEvent(new Event('click'))
    } else {screenCurrent.textContent = screenCurrentList.slice(0, -1).join('');}
})

clearButton.addEventListener('click', ()=>{
    screenCurrent.textContent = '0';
    firstNum = 0;
    operator = '';
    secondNum = 0;
})
/*DeleteClearButtons*/

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
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}