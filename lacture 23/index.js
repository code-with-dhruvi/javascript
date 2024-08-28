let product=JSON.parse(localStorage.getItem("product")) || [];

const handleDelete=(index)=>{
    console.log(index);
    
    product.splice(index,1);
    mapper(product)
    localStorage.setItem("product",JSON.stringify(product))
};

const mapper=(product)=>{
    document.getElementById("productslist").innerHTML=""
    product.map((ele,index)=>{
        let title=document.createElement("h3");
        title.innerHTML=ele.title;
        let price=document.createElement("p");
        price.innerHTML=ele.price;
        let img=document.createElement("img");
        img.src=ele.img;
        let category=document.createElement("p");
        category.innerHTML=ele.category;
        let btnDlt=document.createElement("button");
        btnDlt.innerHTML="Delete";
        btnDlt.addEventListener("click",()=> handleDelete(index))
        let div=document.createElement("div");
        div.append(img,title,price,category,btnDlt);
        document.getElementById("productslist").append(div);
    });
};

mapper(product);