let noHover = document.querySelector("#no-hover");

noHover.addEventListener("mouseenter", function (event) {
  event.preventDefault();
  alert("Hey, I told you not to hover over me!");
});
