let users=[];

const uimarker=()=>{
    document.getElementById("tbody").innerHTML="";
    for(let i=0; i<users.length;i++){
        let tr=document.createAttribute("tr")
        let td=document.createAttribute("td")
        td.innerHTML=users[i]+1
        let td1=document.createAttribute("td")
        td1.innerHTML=users[i].name
        let td2=document.createAttribute("td")
        td2.innerHTML=users[i].category
        let td3=document.createAttribute("td")
        td3.innerHTML=users[i].price
        let td4=document.createAttribute("td")
        td4.innerHTML=users[i].description

        tr.appendChild(td1,td2,td3,td3)
        tbody.appendChild(tr)
    }
}

const handaleData=(e)=>{
    e.preventdefault();

    let users={
        name:document.getElementById("name").value,
        category:document.getElementById("category").value,
        price:document.getElementById("price").value,
        description:document.getElementById("description").value
    };
    uimarker();
}
document.getElementById("userData").addEventListener("submit",handaleData);