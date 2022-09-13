function calcular(){
 var valores = (calc.text.value).split(' ');

var num1 = parseFloat(valores.shift());
var type = valores.shift();
var num2 = parseFloat(valores.shift());

switch (type){
    case "+":
        document.calc.text.value = (num1 + num2);
        break;
    case "-":
        document.calc.text.value = (num1 - num2);
        break;
    case "x": 
    document.calc.text.value = (num1 * num2);
        break;
    case "÷":
        document.calc.text.value = (num1 / num2);
        break;
    case "%":
        document.calc.text.value = (num1 % num2);
        break;
}
}   
