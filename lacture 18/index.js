const divide = (a, b) => {
    if (a == 0) {
        throw new Error("Invalid number a value can't be zero");
    }
    if (b == 0) {
        throw new Error("Invalid number b value can't be zero");
    }
    return a / b
}
console.log("before divide");
console.log(divide(10, 20));
try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (err) {
    console.log("error", err.message);
}
finally {
    console.log("final result");
}
console.log("after divide");
