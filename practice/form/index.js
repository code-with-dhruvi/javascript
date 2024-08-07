let users=[];

const uimarker=()=>{
    document.getElementById("tbody").innerHTML="";
    for(let i=0;i<users.length;i++){
        let tr=document.createAttribute("tr")
        let td=document.createAttribute("td")
        td.innerHTML=users[i]+1
        let td1=document.createAttribute("td")
        td1.innerHTML=users[i].name
        let td2=document.createAttribute("td")
        td2.innerHTML=users[i].email
        let td3=document.createAttribute("td")
        td3.innerHTML=users[i].number
        let td4=document.createAttribute("td")
        td4.innerHTML=users[i].password

        tr.append(td1,td2,td3,td4)
        tbody.append(tr)
    }
}

const handaldata=(e)=>{
    e.preventdefault();

    let name=document.getElementById("name").value
    let email=document.getElementById("email").value
    let number=document.getElementById("number").value
    let password=document.getElementById("password").value

    let user={
        name:name,
        email:email,
        number:number,
        password:password
    };

    users.push(user);
    console.log(users);
    uimarker();
}
document.getElementById("userdata").addEventListener("Submit",handaldata);