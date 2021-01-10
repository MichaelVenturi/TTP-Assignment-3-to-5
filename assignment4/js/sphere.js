$("form").on("submit", function (event) {
  event.preventDefault();
  let radius = $("#sphere-radius").val();
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  $("#result").html(`${volume} cubic units`);
});
