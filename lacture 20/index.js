let counters = document.getElementsByClassName("counter-text");
let delay = 0;
for (let i = 0; i < counters.length; i++) {
  let counter = counters[i];
  let target = counter.innerHTML;
  let count = 0;
  
  setTimeout(() => {
    let id = setInterval(() => {
      count += 1;
      counter.innerHTML = count.toString().padStart(2,"0");
      if (count >= target) {
        clearInterval(id);
      }
    }, 50);
  }, delay);
  
  delay += 1000;
}