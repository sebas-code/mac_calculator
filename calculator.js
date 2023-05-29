//Put all btns elemnts
//And display
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");

let firstOp = null;
let op = null ;
let currentOp = "";


//Cacth events

buttons.forEach((button) =>{
    button.addEventListener("click", (event)=>{
        const target = event.target;
        const value = target.innerText;
        if(target.id == "clear"){
            let firstOp = null;
            let op = null ;
            let currentOp = "";
            display.innerText="";
        }else if (target.id == "plus-min"){
            display.innerText= -1 * display.innerText;
        }else if (target.id == "percentage"){
            display.innerText = parseFloat(display.innerText)/100;
        }else if(
            target.id == "divide"||
            target.id == "multiply"||
            target.id == "minus" ||
            target.id == "plus"
        ){
            operator = value;
            firstOp = parseFloat(display.innerText);
            currentOp = "";
            
        }else if (target.id == "equal"){
            if(operator){
                const secondOp = parseFloat(display.innerText);
                if(operator === "+"){
                    firstOp = firstOp + secondOp;
                }else if(operator === "-" ){
                    firstOp = firstOp - secondOp;
                }else if(operator === "x"){
                    firstOp = firstOp * secondOp;
                }else if(operator === "÷"){
                    firstOp = firstOp / secondOp;
                }

                operator = null;
                currentOp = firstOp.toString();
                display.innerText = firstOp;
            }
        }else{
            if (value === "," && currentOp.includes(",")){
                return;
            }
            currentOp += value;
            display.innerText = currentOp;
        }
    });
})