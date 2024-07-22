let users=[];

const handleData=(e)=>{
    e.preventDefault(); 

    let user={
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        passworde: document.getElementById("passworde").value
    };
    if(user.username.length<2){
        alert("please enter your name all requied fields")
        return
    }
    if(user.email == 0){
        alert("please enter your email")
        return
    }
    if(user.number.length == 10){
        alert("please enter your number")
        return
    }
    if(user.passworde.length >6){
        alert("please enter your passworde")
        return
    }

    users.push(user); 
    console.log(users);
    uimarker();
    document.getElementById("userData").reset();
};

const uimarker=()=>{
    console.log("uimarker called");
    document.getElementById("tbody").innerHTML="";
    for(i=0; i<users.length; i++){
        let tr=document.createAttribute("tr");
        let td1=document.createAttribute("td");
        td1.innerHTML=i+1;
        let td2=document.createAttribute("td");
        td2.innerHTML=users[i].username;
        let td3=document.createAttribute("td");
        td3.innerHTML=users[i].email;
        let td4=document.createAttribute("td");
        td4.innerHTML=users[i].number;
        let td5=document.createAttribute("td");
        td5.innerHTML=users[i].passworde;

        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
    }
};

document.getElementById("userData").addEventListener("submit",handleData);