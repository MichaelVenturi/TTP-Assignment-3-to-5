$("form").on("submit", function (event) {
  event.preventDefault();
  let radius = $("#sphere-radius").val();
  let volume = (4 / 3) * Math.PI * radius;
  $("#result").html(`${volume} cubic units`);
});
