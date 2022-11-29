let screenText = document.querySelector(".text")
let num = document.querySelectorAll(".num");
let operator = document.querySelectorAll(".ope");
let clearBtn = document.querySelector(".clear");
let deleteBtn = document.querySelector(".delete");
let equal = document.querySelector(".equal")
let dot = document.querySelector(".dot")

let currentOperator;




num.forEach(num => {
    num.onclick = () => {
        screenText.innerHTML += num.value;
        console.log(num.value)
    }
});

operator.forEach(ope => {
    ope.onclick = () => {
        screenText.innerHTML += ope.value;
        currentOperator = ope.value;
        console.log(currentOperator)
    }
});
dot.onclick = () => {
    screenText.innerHTML += dot.innerHTML;
}

deleteBtn.onclick = () => deleteScreen();
clearBtn.onclick = () => clearScreen(screenText.innerHTML)

function plus(num1,num2){
    return num1 + num2;
}

function minus(num1,num2){
    return num1 - num2;
}

function division(num1,num2){
    return num1 / num2;
}

function multipply(num1,num2){
    return num1 * num2
}


function deleteScreen(){
    screenText.innerHTML = "";
}

function clearScreen(screen){
    newArr = screen.toString();
    newArr2 = newArr.slice(0,newArr.length-1)
    screenText.innerHTML = newArr2  
}

function nums(text){
    newArr = text.split(`${currentOperator}`)
    return newArr;
}

equal.onclick = () => {
    let arr = nums(screenText.innerHTML)
    result = checkCurrentOpe(parseFloat(arr[0]),currentOperator,parseFloat(arr[1]));
    screenText.innerHTML = result;
    console.log(result)
}


function checkCurrentOpe(num1,ope,num2){
    if(ope == "+"){
        return num1 + num2;
    }
    else if(ope == "-"){
        return num1 - num2;
    }
    else if(ope == "X"){
        return num1 * num2;
    }
    else if(ope == "/"){
        return num1 / num2;
    }

}