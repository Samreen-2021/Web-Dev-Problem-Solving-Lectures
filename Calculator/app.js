


function add(){
    let firstNumber = parseInt(document.getElementById('numb1').value);
    let secondNumber = parseInt(document.querySelector('#numb2').value);
    let sum = firstNumber + secondNumber;
    document.getElementById('result').value = sum;
}
function sub(){
    let firstNumber = parseInt(document.getElementById('numb1').value);
    let secondNumber = parseInt(document.querySelector('#numb2').value);
    let sub = firstNumber - secondNumber;
    document.getElementById('result').value = sub;
}
function multiply(){
    let firstNumber = parseInt(document.getElementById('numb1').value);
    let secondNumber = parseInt(document.querySelector('#numb2').value);
    let product = firstNumber * secondNumber;
    document.getElementById('result').value = product;
}
function divide(){
    let firstNumber = parseInt(document.getElementById('numb1').value);
    let secondNumber = parseInt(document.querySelector('#numb2').value);    
    let  divide = firstNumber / secondNumber;
    document.getElementById('result').value = divide;
}
