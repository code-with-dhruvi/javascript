let users = [];

const handleDelete=(index)=>{
    users.splice(index,1);
    uimarker();
}

const uimarker=()=>{
    document.getElementById("tbody").innerHTML=" ";
    for(let i=0;i<users.length;i++){
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerHTML=users[i]+1
        let td2=document.createElement("td")
        td2.innerHTML=users[i].fee
        let td3=document.createElement("td")
        td3.innerHTML=users[i].grid
        let td4=document.createElement("td")
        td4.innerHTML=users[i].name
        let td5=document.createElement("td")
        td5.innerHTML=users[i].number
        let td6=document.createElement("td")
        td6.innerHTML=users[i].course
        let td7=document.createElement("td")
        let deletebutton=document.createElement("button")
        deletebutton.innerHTML="Delete"
        deletebutton.addEventListener("click",()=>(handleDelete(i)))
        td7.append(deletebutton)

        tr.append(td1,td2,td3,td4,td5,td6,td7)
        tbody.append(tr)
    }
}

const handleData = (e) => {
    e.preventDefault();

    let fee = document.getElementById("fee").value;
    let grid= document.getElementById("grid").value;
    let name = document.getElementById("name").value;
    let number= document.getElementById("number").value;
    let course = document.getElementById("Course").value;

    let user = {
      fee:fee,
      grid:grid,
      name:name,
      number:number,
      course:course
    };

    users.push(user);
    uimarker();
    if(user.name.length<2){
        alert("name must be laste 2 charecters.")
        return
    }
    else if(user.grid.length !==4){
        alert("grid must be laste 4 number.")
        return
    }
    else if(user.number.length >=10){
        alert("number must be laste 10.")
        return
    }
    else{
        alert("please enter your all requied fields Data.")
        return
    }

};

document.getElementById("userdata").addEventListener("submit", handleData);