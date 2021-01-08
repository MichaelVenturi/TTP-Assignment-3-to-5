$("form").on("submit", function (event) {
  event.preventDefault();
  const password = $("#password").val();
  if (password != "12345678") {
    alert("incorrect password");
  } else {
    $("#heading").html("All info correct");
  }
});
// Couldn't get this one to work right without jQuery
// password = document.getElementById("password").nodeValue;
// if (password !== "12345678") {
//   alert("incorrect password");
// } else {
//   document.getElementById("header").innerText = "All info correct";
// }
