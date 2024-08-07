let users=[];
const handaledata=(e)=>{
    e.preventdefault();

    let users={
        name:document.getElementById("name").value,
        category:document.getElementById("category").value,
        price:document.getElementById("price").value,
        description:document.getElementById("description").value
    };
}
document.getElementById("form").addEventListener("submit",handaledata)