const printarray = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        console.log(`index ${i}.value ${arr[i]}`);
    }
}

const arraysum = (arr) => {
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

const oddIndexsum = (arr) => {
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 == 1) {
            sum += arr[i];
        }
    }
    console.log(sum);
}

const evenvaluesum = (arr) => {
    let n = arr.length;
    let evensum = 0;
    let oddsum = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            evensum += arr[i];
        }
        else {
            oddsum += arr[i];
        }
    }
    if (evensum > oddsum) {
        console.log(evensum - oddsum);
    }
    else {
        console.log(oddsum - evensum);
    }
}

let arr = [10, 24, 35, 40, 53, 67]
let arr2 = [30, 49, 50]
oddIndexsum(arr2)