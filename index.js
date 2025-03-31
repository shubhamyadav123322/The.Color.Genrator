let array = ["Ben", "Peter", "Tony", "Bruce", "Clark", "Steve", "Steven"];

let btn = document.querySelector("button");
let body = document.querySelector("body");
let h5 = document.querySelector("h5");
btn.addEventListener("click", function () {
  let user = Math.floor(Math.random() * array.length);
  let c1 = Math.floor(Math.random() * 255);
  let c2 = Math.floor(Math.random() * 255);
  let c3 = Math.floor(Math.random() * 255);
  let c4 = Math.floor(Math.random() * 255);
  let c5 = Math.floor(Math.random() * 255);
  let c6 = Math.floor(Math.random() * 255);
  let winner = array[user];
  h5.innerHTML = winner;
  h5.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
  btn.innerHTML = "Choose Color";
  body.style.backgroundColor = `rgb(${c4}, ${c5}, ${c6})`;
  h5.innerHTML = `rgb(${c1}, ${c2}, ${c3})`;
});
