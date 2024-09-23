console.log("starting");

const getdata=async()=>{
    let req=await fetch("https://dummyjson.com/products");
    let res=await req.json();
    console.log(res);
    mapper(res.product)
}
getdata();
console.log("geting data");

const mapper=(data)=>{
    data.map((iteam)=>{
        let container=document.createElement("div")
        container.className="product";
        let title=document.createElement("h1")
        title.innerHTML=iteam.title
        let description=document.createElement("p")
        description.innerHTML=iteam.description
        let category=document.createElement("h2")
        category.innerHTML=iteam.category
        let price=document.createElement("p")
        price.innerHTML=iteam.price
        let rating=document.createElement("h3")
        rating.innerHTML=iteam.rating
        let stock=document.createElement("p")
        stock.innerHTML=iteam.stock

       
        container.append(title,price,id,category,rating,stock)
        document.getElementById("product-list").append(container);
    })
}
console.log("endding");