//-----------------------------------------------------------
// prompt 1
let container1 = document.getElementById("container");
console.log(container1);

// prompt 2
let container2 = document.querySelector("#container");
console.log(container2);

// prompt 3
let listSecond = document.querySelectorAll("li.second");
listSecond.forEach((element) => console.log(element));

// prompt 4
let olThird = document.querySelector("ol li.third");
console.log(olThird);

// prompt 5
container1.insertAdjacentHTML("beforeend", "Hello");

// prompt 6
let divFooter = document.querySelector("div.footer");
divFooter.classList.add("main");
console.log(divFooter.classList);

// prompt 7
divFooter.classList.remove("main");
console.log(divFooter.classList);

// prompt 8, 9, 10
let newElement = document.createElement("li");
newElement.innerText = "four";
let uList = document.querySelector("ul");
uList.append(newElement);
console.log(uList);

// prompt 12
let oList = document.querySelectorAll("ol li");
oList.forEach((li) => (li.style.background = "green"));

// prompt 13
divFooter.remove();
