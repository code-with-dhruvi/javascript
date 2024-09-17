import Navbar from "../componets/navbar.js";

document.getElementById('navbar').innerHTML=Navbar()
let users = JSON.parse(localStorage.getItem("userdata")) || [];
const handleData = (e) => {
  e.preventDefault();

  if (isMatched.length > 0) {
    alert("submit success")

    window.location.href = "/index.html"
  }
  else {
    alert("submit failure")
  }
};

document.getElementById("#userData").addEventListener("submit", handleData);