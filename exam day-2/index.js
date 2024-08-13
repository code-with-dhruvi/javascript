let key = prompt("enter key you want set")
let value = prompt("enter value you want set")

localStorage.setItem(key, value)

console.log(`the value at ${key} is ${localStorage.getItem(key)}`);

if (key == "blue" || key == "red") {
    localStorage.removeItem(key)
}

if (key == 0) {
    localStorage.clear()
}