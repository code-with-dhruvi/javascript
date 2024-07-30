const mearge = () => {
    let mearge_array = []

    let array1 = [1, 2, 3]
    let array2 = [4, 5, 6]
    for (let i = 0; i < array1.length; i++) {
        mearge_array.push(array1[i]);
    }
    for (let i = 0; i < array2.length; i++) {
        mearge_array.push(array2[i]);
    }
    console.log(mearge_array);
}
mearge();