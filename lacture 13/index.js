let users = [];

const handleDelete = (index) => {
    users.splice(index, 1)
    uimarker();
}
const uimarker = () => {
    console.log("uimarker called");
    document.getElementById("tbody").innerHTML = " ";
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr")
        let td1 = document.createElement("td")
        td1.innerHTML = users[i] + 1
        let td2 = document.createElement("td")
        td2.innerHTML = users[i].username
        let td3 = document.createElement("td")
        td3.innerHTML = users[i].email
        let td4 = document.createElement("td")
        td4.innerHTML = users[i].number
        let td5 = document.createAttribute("td")
        td5.innerHTML = "remove()"
        td5.addEventListener("click", () => handleDelete(i));      

        tr.append(td1, td2, td3, td4, td5);
        tbody.append(tr);
    }

}

const handleData = (e) => {
    e.preventDefault(); 
    console.log("handleData called");

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
        
    let user = {
        username: username,
        email: email,
        number: number
    };

    users.push(user); 
    console.log(users); 
    handleDelete();
    uimarker();
};

document.getElementById("userdata").addEventListener("submit", handleData);