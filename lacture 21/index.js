document.getElementById("rollbtn").addEventListener("click", function () {
    const dice = document.getElementById("dice");
    const dicefrant = ["1", "2", "3", "4", "5", "6"];
    const random = Math.floor(Math.random() * dicefrant.length);
    dice.textContent = dicefrant[random];
})