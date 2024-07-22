const sum = () => {
    let number1 = document.getElementById("num1").Value;
    let number2 = document.getElementById('num2').Value;
    let number3 = document.getElementById('num3').Value;
    let number4= document .getElementById("num4").value;

    let sum = Number(num1) + Number(num2) + Number(num3) +Number(num4);
    let sub = (num1, num2, num3,num4);

    document.getElementById("result").innerHTML = `sum of num1 num2 num3 and num4` + sum;
}