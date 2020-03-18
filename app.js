//SCREEN VARIABLES
const process = document.getElementById('process');
const totalScreen = document.getElementById('totalScreen');

// NUMBERS VARIABLES
const but7 = document.getElementById('but7');
const but8 = document.getElementById('but8');
const but9 = document.getElementById('but9');
const but4 = document.getElementById('but4');
const but5 = document.getElementById('but5');
const but6 = document.getElementById('but6');
const but1 = document.getElementById('but1');
const but2 = document.getElementById('but2');
const but3 = document.getElementById('but3');
const but0 = document.getElementById('but0');
const comma = document.getElementById('comma');


//OPERATION BUTTONS
const butMult = document.getElementById('butX');
const butDivide = document.getElementById('divide');
const butAdd = document.getElementById('butAdd');
const resultado = document.getElementById('equal');
const cle = document.getElementById('ce');
const butErease = document.getElementById('butErease');

const operatorSymbolX = "X";
const operatorSymbolDiv = "÷";
const operatorSymbolSub = "-";
const operatorSymbolAdd = "+";

let typeOpMul = false;
let typeOpDiv = false;
let typeOpCle = false;
let typeOpSub = false;
let typeOpAdd = false;

//GLOBAL VARIABLES
let operator = false;
let resultaA = "";
let resultaB = "";
let totalA = 0;
let totalB = 0;
let finalTotal = 0;


//OPERATIONS FUNCTIONS
function multiply(totalA, totalB){
  finalTotal = totalA * totalB;
  totalScreen.innerHTML = finalTotal;
  resultaB = "";
}

function divide(totalA, totalB){
  finalTotal = totalA / totalB;
  totalScreen.innerHTML = finalTotal;
  resultaB = "";
}

function sub(totalA, totalB){
  finalTotal = totalA - totalB;
  totalScreen.innerHTML = finalTotal;
  resultaB = "";
}

function add(totalA, totalB){
  finalTotal = totalA + totalB;
  totalScreen.innerHTML = finalTotal;
  resultaB = "";
}


//THE NUMBERS
but7.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "7";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "7";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "7";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "7";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "7";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "7";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "7";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "7";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "7";
      process.innerHTML = resultaA;
  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

but8.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "8";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "8";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "8";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "8";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "8";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "8";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "8";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "8";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "8";
      process.innerHTML = resultaA;
  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

but9.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "9";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "9";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "9";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "9";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "9";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "9";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "9";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "9";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "9";
      process.innerHTML = resultaA;
  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

but4.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "4";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "4";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "4";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "4";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "4";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "4";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "4";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "4";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "4";
      process.innerHTML = resultaA;
  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

but5.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "5";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "5";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "5";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "5";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "5";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "5";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "5";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "5";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "5";
      process.innerHTML = resultaA;
  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

but6.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "6";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "6";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "6";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "6";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "6";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "6";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "6";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "6";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "6";
      process.innerHTML = resultaA;
  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

but1.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "1";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "1";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "1";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "1";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "1";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "1";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "1";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "1";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "1";
      process.innerHTML = resultaA;
  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

but2.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "2";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "2";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "2";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "2";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "2";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "2";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "2";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "2";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "2";
      process.innerHTML = resultaA;
  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

but3.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "3";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "3";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "3";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "3";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "3";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "3";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "3";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "3";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "3";
      process.innerHTML = resultaA;
  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

but0.addEventListener("click", function(){
  if(finalTotal){
    if(typeOpMul){
      resultaB = resultaB + "0";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "0";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "0";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "0";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else if(operator){
    if(typeOpMul){
      resultaB = resultaB + "0";
      process.innerHTML = resultaA + operatorSymbolX + resultaB;
    } else if(typeOpDiv){
      resultaB = resultaB + "0";
      process.innerHTML = resultaA + operatorSymbolDiv + resultaB;
    } else if(typeOpSub){
      resultaB = resultaB + "0";
      process.innerHTML = resultaA + operatorSymbolSub + resultaB;
    } else if(typeOpAdd){
      resultaB = resultaB + "0";
      process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
    }
  } else {
      resultaA += "0";
      process.innerHTML = resultaA;

  }
  totalA = parseInt(resultaA);
  totalB = parseInt(resultaB);
});

comma.addEventListener("click", function(){

  if(operator && resultaB){
    resultaB = resultaB + ",";
  } else if(resultaA){
    resultaA = resultaA + ",";
  } else {
    console.log("nada");
  }

});




//OPERATIONS BUTTONS
butMult.addEventListener("click", function(){
  if(finalTotal){
    resultaA = finalTotal;
    typeOpMul = true;
    typeOpDiv = false;
    typeOpAdd = false;
    typeOpSub = false;
    operator = true;
    process.innerHTML = resultaA + operatorSymbolX;
  } else if(resultaA){
    typeOpMul = true;
    operator = true;
    process.innerHTML = resultaA + operatorSymbolX;
  } else {
    console.log("there is no resultaA");
  }

});

butDivide.addEventListener("click", function(){
  if(finalTotal){
    resultaA = finalTotal;
    typeOpDiv = true;
    typeOpAdd = false;
    typeOpMul = false;
    typeOpSub = false;
    operator = true;
    process.innerHTML = resultaA + operatorSymbolDiv;
  } else if(resultaA){
    typeOpDiv = true;
    operator = true;
    process.innerHTML = resultaA + operatorSymbolDiv;
  } else {
    console.log("there is no resultaA");
  }

});

butSub.addEventListener("click", function(){
  if(finalTotal){
    resultaA = finalTotal;
    typeOpSub = true;
    typeOpAdd = false;
    typeOpMul = false;
    typeOpDiv = false;
    operator = true;
    process.innerHTML = resultaA + operatorSymbolSub;
  } else if(resultaA){
    typeOpSub = true;
    operator = true;
    process.innerHTML = resultaA + operatorSymbolSub;
  } else {
    console.log("there is no resultaA");
  }

});

butAdd.addEventListener("click", function(){
  if(finalTotal){
    resultaA = finalTotal;
    typeOpAdd = true;
    typeOpMul = false;
    typeOpSub = false;
    typeOpDiv = false;
    operator = true;
    process.innerHTML = resultaA + operatorSymbolAdd;
  } else if(resultaA){
    typeOpAdd = true;
    operator = true;
    process.innerHTML = resultaA + operatorSymbolAdd;
  } else {
    console.log("there is no resultaA");
  }
});

butErease.addEventListener("click", function(){
  if(resultaB){
    resultaBarray = resultaB.split("");
    resultaBarray.pop();
    resultaB = resultaBarray.join("");
    process.innerHTML = resultaA + operatorSymbolAdd + resultaB;
  } else if(operator) {
    operator = false;
    typeOpAdd = false;
    typeOpMul = false;
    typeOpSub = false;
    typeOpDiv = false;
    process.innerHTML = resultaA;
  } else if(!isNaN(resultaA)) {
    resultaAarray = resultaA.toString().split("");
    resultaAarray.pop();
    resultaA = resultaAarray.join("");
    process.innerHTML = resultaA;
  } else if(isNaN(resultaA)) {
    resultaAarray = resultaA.split("");
    resultaAarray.pop();
    resultaA = resultaAarray.join("");
    process.innerHTML = resultaA;
  } else {
    console.log("paso todos los ifs");

  }

});

cle.addEventListener("click", function(){
    resultaA = "";
    resultaB = "";
    totalA = 0;
    totalB = 0;
    process.innerHTML = "";
    finalTotal = totalA + totalB;
    totalScreen.innerHTML = finalTotal;
    typeOpMul = false;
    typeOpDiv = false;
    typeOpSub = false;
    operator = false;
});

resultado.addEventListener("click", function(){

  if(typeOpMul){

    if(isNaN(resultaA) && isNaN(resultaB)){

      //RES A
      let value = resultaA.split(",");
      let decimals = value[1].length;
      let res = parseFloat(resultaA.replace(',','.').replace(' ',''));
      resultaA = res.toFixed(decimals);
      totalA = resultaA;

      //RES B
      let valueB = resultaB.split(",");
      let decimalsB = valueB[1].length;
      let resB = parseFloat(resultaB.replace(',','.').replace(' ',''));
      resultaB = resB.toFixed(decimalsB);
      totalB = resultaB;

      //DECIMALS
      let decimalsFinal;

      if(decimals > decimalsB){
        decimalsFinal = decimals;
      } else {
        decimalsFinal = decimalsB;
      }

      //OP FINAL
      var result = parseFloat(totalA) * parseFloat(totalB);
      result = result.toFixed(decimalsFinal);
      totalScreen.innerHTML = result;


    } else if(isNaN(resultaA)){

      //RES A
      let value = resultaA.split(",");
      let decimals = value[1].length;
      let res = parseFloat(resultaA.replace(',','.').replace(' ',''));
      resultaA = res.toFixed(decimals);
      totalA = resultaA;

      //OP FINAL
      var result = parseFloat(totalA) * parseFloat(totalB);
      result = result.toFixed(decimals);
      totalScreen.innerHTML = result;

    } else if(isNaN(resultaB)){

      //RES B
      let valueB = resultaB.split(",");
      let decimalsB = valueB[1].length;
      let resB = parseFloat(resultaB.replace(',','.').replace(' ',''));
      resultaB = resB.toFixed(decimalsB);
      totalB = resultaB;

      //OP FINAL
      var result = parseFloat(totalA) * parseFloat(totalB);
      result = result.toFixed(decimalsB);
      totalScreen.innerHTML = result;

    } else {
      multiply(totalA, totalB);
    }


  } else if(typeOpDiv){
    if(isNaN(resultaA) && isNaN(resultaB)){

      //RES A
      let value = resultaA.split(",");
      let decimals = value[1].length;
      let res = parseFloat(resultaA.replace(',','.').replace(' ',''));
      resultaA = res.toFixed(decimals);
      totalA = resultaA;

      //RES B
      let valueB = resultaB.split(",");
      let decimalsB = valueB[1].length;
      let resB = parseFloat(resultaB.replace(',','.').replace(' ',''));
      resultaB = resB.toFixed(decimalsB);
      totalB = resultaB;

      //DECIMALS
      let decimalsFinal;

      if(decimals > decimalsB){
        decimalsFinal = decimals;
      } else {
        decimalsFinal = decimalsB;
      }

      //OP FINAL
      var result = parseFloat(totalA) / parseFloat(totalB);
      result = result.toFixed(decimalsFinal);
      totalScreen.innerHTML = result;


    } else if(isNaN(resultaA)){

      //RES A
      let value = resultaA.split(",");
      let decimals = value[1].length;
      let res = parseFloat(resultaA.replace(',','.').replace(' ',''));
      resultaA = res.toFixed(decimals);
      totalA = resultaA;

      //OP FINAL
      var result = parseFloat(totalA) / parseFloat(totalB);
      result = result.toFixed(decimals);
      totalScreen.innerHTML = result;

    } else if(isNaN(resultaB)){

      //RES B
      let valueB = resultaB.split(",");
      let decimalsB = valueB[1].length;
      let resB = parseFloat(resultaB.replace(',','.').replace(' ',''));
      resultaB = resB.toFixed(decimalsB);
      totalB = resultaB;

      //OP FINAL
      var result = parseFloat(totalA) / parseFloat(totalB);
      result = result.toFixed(decimalsB);
      totalScreen.innerHTML = result;

    } else {
      divide(totalA, totalB);
    }


  } else if(typeOpSub){
    if(isNaN(resultaA) && isNaN(resultaB)){

      //RES A
      let value = resultaA.split(",");
      let decimals = value[1].length;
      let res = parseFloat(resultaA.replace(',','.').replace(' ',''));
      resultaA = res.toFixed(decimals);
      totalA = resultaA;

      //RES B
      let valueB = resultaB.split(",");
      let decimalsB = valueB[1].length;
      let resB = parseFloat(resultaB.replace(',','.').replace(' ',''));
      resultaB = resB.toFixed(decimalsB);
      totalB = resultaB;

      //DECIMALS
      let decimalsFinal;

      if(decimals > decimalsB){
        decimalsFinal = decimals;
      } else {
        decimalsFinal = decimalsB;
      }

      //OP FINAL
      var result = parseFloat(totalA) - parseFloat(totalB);
      result = result.toFixed(decimalsFinal);
      totalScreen.innerHTML = result;


    } else if(isNaN(resultaA)){

      //RES A
      let value = resultaA.split(",");
      let decimals = value[1].length;
      let res = parseFloat(resultaA.replace(',','.').replace(' ',''));
      resultaA = res.toFixed(decimals);
      totalA = resultaA;

      //OP FINAL
      var result = parseFloat(totalA) - parseFloat(totalB);
      result = result.toFixed(decimals);
      totalScreen.innerHTML = result;

    } else if(isNaN(resultaB)){

      //RES B
      let valueB = resultaB.split(",");
      let decimalsB = valueB[1].length;
      let resB = parseFloat(resultaB.replace(',','.').replace(' ',''));
      resultaB = resB.toFixed(decimalsB);
      totalB = resultaB;

      //OP FINAL
      var result = parseFloat(totalA) - parseFloat(totalB);
      result = result.toFixed(decimalsB);
      totalScreen.innerHTML = result;

    } else {
      sub(totalA, totalB);
    }

  } else if(typeOpAdd){
      if(isNaN(resultaA) && isNaN(resultaB)){

        //RES A
        let value = resultaA.split(",");
        let decimals = value[1].length;
        let res = parseFloat(resultaA.replace(',','.').replace(' ',''));
        resultaA = res.toFixed(decimals);
        totalA = resultaA;

        //RES B
        let valueB = resultaB.split(",");
        let decimalsB = valueB[1].length;
        let resB = parseFloat(resultaB.replace(',','.').replace(' ',''));
        resultaB = resB.toFixed(decimalsB);
        totalB = resultaB;

        //DECIMALS
        let decimalsFinal;

        if(decimals > decimalsB){
          decimalsFinal = decimals;
        } else {
          decimalsFinal = decimalsB;
        }

        //OP FINAL
        var result = parseFloat(totalA) + parseFloat(totalB);
        result = result.toFixed(decimalsFinal);
        totalScreen.innerHTML = result;


      } else if(isNaN(resultaA)){

        //RES A
        let value = resultaA.split(",");
        let decimals = value[1].length;
        let res = parseFloat(resultaA.replace(',','.').replace(' ',''));
        resultaA = res.toFixed(decimals);
        totalA = resultaA;

        //OP FINAL
        var result = parseFloat(totalA) + parseFloat(totalB);
        result = result.toFixed(decimals);
        totalScreen.innerHTML = result;

      } else if(isNaN(resultaB)){

        //RES B
        let valueB = resultaB.split(",");
        let decimalsB = valueB[1].length;
        let resB = parseFloat(resultaB.replace(',','.').replace(' ',''));
        resultaB = resB.toFixed(decimalsB);
        totalB = resultaB;

        //OP FINAL
        var result = parseFloat(totalA) + parseFloat(totalB);
        result = result.toFixed(decimalsB);
        totalScreen.innerHTML = result;

      } else {
        add(totalA, totalB);
      }

  } else {
    console.log("no hay operador");
  }

});
