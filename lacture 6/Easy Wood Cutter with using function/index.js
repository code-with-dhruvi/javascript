const sum = () => {
    let num1=document.getElementById("num1").value;
    let n=num1;
    let ans="";
    if(n%3==0){
        console.log(ans="Yes");
    }
    else{
        console.log(ans="No");
    }
    document.getElementById('result').innerHTML=ans;
}
