var firstNumber = 0;
var secondNumber = 0;
var operation = 0;
var operations = {'add':'+', 'substract':'-','multiply':'X','divide':'/'};
var result = 0;

function setFirstNumber(number){
    if(firstNumber == 0) {
        firstNumber = number;
    } else {
        firstNumber = firstNumber + '' + number;
    }
    jQuery('.display .currentNUmber').html(firstNumber);
}

function setSecondNumber(number){
    if(secondNumber == 0) {
        secondNumber = number;
    } else {
        secondNumber = secondNumber + '' + number;
    }
    jQuery('.display .currentNUmber').html(secondNumber);
}

function number(number) {
    if(operation == 0){
        setFirstNumber(number);
    } else {
        setSecondNumber(number);
    }
}

jQuery('.operation').click(function() {
    operation = jQuery(this).attr("data-action");
    if(secondNumber != 0){
        if(operation == 'add'){
            result = Number(firstNumber) + Number(secondNumber);
        } else if (operation == 'substract'){
            result = Number(firstNumber) - Number(secondNumber);
        }
        else if (operation == 'multiply'){
            result = Number(firstNumber) * Number(secondNumber);
        }
        else if (operation == 'divide'){
            result = Number(firstNumber) / Number(secondNumber);
        }
        firstNumber = result;
    } 
    jQuery('.display .pastNumber .operationDisplay').html(operations[operation]);
    jQuery('.display .pastNumber .number').html(firstNumber);
    jQuery('.display .currentNUmber').html('');
    secondNumber = 0;
})