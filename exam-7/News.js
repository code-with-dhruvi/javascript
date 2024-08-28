let news=JSON.parse(localStorage.getItem("news"))||[];
const handleData=(e)=>{
    e.preventDefault();
    let data={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        img:document.getElementById("img").value,
        password:document.getElementById("password").value,
        contry:document.getElementById("contry").value,
    };
    news.push(data);
    localStorage.setItem("news",JSON.stringify(news));
};
document.getElementById("newsdata").addEventListener("submit",handleData);