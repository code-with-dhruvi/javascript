let users = [];

const uimarker=()=>{
    console.log("uimarker called");
    document.getElementById("tbody").innerHTML=" ";
    for(let i=0;i<users.length;i++){
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerHTML=users[i]+1
        let td2=document.createElement("td")
        td2.innerHTML=users[i].username
        let td3=document.createElement("td")
        td3.innerHTML=users[i].email
        let td4=document.createElement("td")
        td4.innerHTML=users[i].number

        tr.append(td1,td2,td3,td4)
        tbody.append(tr)
    }
}

const handleData = (e) => {
    e.preventDefault(); // refresh page control
    console.log("handleData called");

    // value store
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;

    //data control to object
    let user = {
        username: username,
        email: email,
        number: number
    };

    // global array access
    users.push(user); // Corrected to push user object to the users array
    console.log(users); // Log the array of users
    uimarker();
};

document.getElementById("userdata").addEventListener("submit", handleData);