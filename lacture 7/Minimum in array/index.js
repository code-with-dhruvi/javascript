let num=[2, 3, 4, 5, 6, 9, 10, 3];

let mini=num[0];

for(let i=1; i<num.length; i++){
    if(num[i]<mini){
        mini=num[i];
    }
}

console.log(mini);