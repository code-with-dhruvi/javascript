let num=[2, 3, 4, 5, 6, 9, 10, 3];

let max=num[0];

for(let i=1; i<num.length; i++){
    if(num[i]>max){
        max=num[i];
    }
}

console.log(max);