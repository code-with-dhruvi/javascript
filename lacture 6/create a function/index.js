const sum = () => {
    let number1 = document.getElementById("num1").Value;
    let number2 = document.getElementById('num2').Value;
    let number3 = document.getElementById('num3').Value;

    let sum = Number(num1) + Number(num2) + Number(num3);
    let sub = (num1, num2, num3);

    document.getElementById("result").innerHTML = `sum of num1 num2 and num3` + sum;
}