let product=JSON.parse(localStorage.getItem("product")) || [];

const handleData=(e)=>{
    e.preventDefault();

    let data={
        title:document.getElementById("title").value,
        price:document.getElementById("price").value,
        img:document.getElementById("img").value,
        category:document.getElementById("category").value
    };
    product.push(data);
    localStorage.setItem("product",JSON.stringify(product));
};
document.getElementById("productData").addEventListener("submit",handleData);