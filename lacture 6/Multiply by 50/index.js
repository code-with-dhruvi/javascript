const sum = () => {

    let num1 = document.getElementById('num1').value;

    console.log(num1*50);
    console.log(Number(num1) * 50);

    let sum = Number(num1) * 50 ;

    document.getElementById('result').innerHTML=sum
}