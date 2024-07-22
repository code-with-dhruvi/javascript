const sum = () => {

    let num1 = document.getElementById('num1').value;

    console.log(num1*7);
    console.log(Number(num1) * 7);

    let sum = Number(num1) * 7 ;

    document.getElementById('result').innerHTML=sum
}