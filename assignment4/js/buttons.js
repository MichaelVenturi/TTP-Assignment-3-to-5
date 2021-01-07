let button1 = document.querySelector("#button-1");
let button2 = document.querySelector("#button-2");
let argument = document.querySelector("#argument");

button1.onclick = function () {
  argument.innerText = "I'm right";
};
button2.onclick = function () {
  argument.innerText = "No, I'm right!";
};
