const duplicates=(arr)=> {
    let seen = {};
    let uniqueArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            uniqueArr.push(arr[i]);
            seen[arr[i]] = true;
        }
    }
    
    return uniqueArr;
}

console.log(duplicates([1, 2, 2, 3,2, 4, 5]));