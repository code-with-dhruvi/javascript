let users=[];

const handleDelete=()=>{
    users.splice(index,1);
    uimarker();
}
const uimarker=()=>{
    document.getElementById("tbody").innerHTML="";
    for(let i=0;i<users.length;i++){
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1=innerHTML=users[i]+1
        let td2=document.createElement("td")
        td2=innerHTML=users[i].task
        let td3=document.createElement("td")
        td3=innerHTML=users[i].add
        let td4=document.createElement("td")
        td4=innerHTML=users[i].list
        td5=document.createElement("td")
        let Deletebutton=document.createElement("button")
        Deletebutton.innerHTML="Delete"
        Deletebutton.addEventListener("click",()=>(handleDelete(i)))
        td5.append(Deletebutton)

        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)
    }
}

const handleData=(e)=>{
    e.preventDefault();

    let task=document.getElementById("task").value;
    let add=document.getElementById("add").value;
    let list=document.getElementById("list").value;
    let Delete=document.getElementById("Delete").value;

    let users={
        task:task,
        add:add,
        list:list,
        Delete:Delete
    };
    users.push(users)
    uimarker();
}
document.getElementById("userData").addEventListener("add",handleData);