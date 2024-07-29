let num=[3, 7, 1, 9, 2];

let retun=num[2];

for(let i=1; i<num.length; i++){
    if(num[i]>retun){
        retun=num[i];
    }
}

console.log(retun);