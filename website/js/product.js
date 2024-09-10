import getValue, { createTag } from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML=Navbar();

let products=JSON.parse(localStorage.getItem("products")) || [];

let cart=[]
const isexist=(id)=>{
    const product=cart.filter((ele)=>ele.id)
    if(product.length>0){
        alert("product already exists");
        return true;
    }
    else{
        return false;
    }
}

const handlecart=(ele)=>{
    if(isexist(ele.id)){

    }
    else{
        cart.push(ele);
        alert("added cart")
    }
    console.log(cart);
}

const mapper=(data)=>{
    document.getElementById("productlist").innerHTML = "";
    data.map((ele)=>{
        let img=createTag("img",ele.img)
        let price=createTag("p",ele.price)
        let title=createTag("h3",ele.title)
        let category=createTag("p",ele.category)
        let buybtn=createTag("button","Buy");
        buybtn.addEventListener("click",()=>handlecart(ele))
        let div=document.createElement("div")
        div.append(img,title,price,category,buybtn)
        document.getElementById("productlist").append(div)
    });
};
mapper(products);

// sorting and filtering
const handleSort = (orderby)=>{
    if(orderby=="lth"){
        let temp=products.sort((a,b)=>a.price-b.price);
        mapper(temp);
    }
    else{
        let temp=products.sort((a,b)=>b.price-a.price);
        mapper(temp);
    }
};
const handleCategory=(category)=>{
    let temp=products.filter((ele)=>ele.category==category);
    mapper(temp);
};
document.getElementById("lth").addEventListener("click",()=>handleSort("lth"));
document.getElementById("htl").addEventListener("click",()=>handleSort("htl"));

document.getElementById("men").addEventListener("click",()=>handleCategory("men"));
document.getElementById("women").addEventListener("click",()=>handleCategory("women"));

document.getElementById("electronics").addEventListener("click",()=>handleCategory("electronics"));

const search=(e)=>{
    e.preventDefault();

    let searchValue=getValue("#search");
    let temp=products.filter((ele)=>ele.title.tolowercase().includes(searchValue.tolowercase()));
    mapper(temp);
};
document.getElementById("searching").addEventListener("submit",search);