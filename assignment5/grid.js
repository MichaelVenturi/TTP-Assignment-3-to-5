jQuery(document).ready(function ($) {
  let grid = $("#grid");

  // GRID FUNCTIONS
  //   add rows
  $("#add-row").on("click", function () {
    console.log("add-row clicked");
    let lastRow = grid.children().last();
    let numOfCols = lastRow.children().length;
    // console.log(numOfCols);
    let newRow = document.createElement("div");

    newRow.classList.add("row");
    grid.append(newRow);
    lastRow = grid.children().last();

    //add columns to new row
    for (let i = 0; i < numOfCols; i++) {
      let newCol = document.createElement("div");
      newCol.classList.add("col", "border", "border-dark", "p-5", "cell");
      lastRow.append(newCol);
    }
  });

  //   remove rows
  $("#remove-row").on("click", function () {
    console.log("remove-row clicked");
    // removing all the rows conflicts with how my add function works
    // will make so there is always at least 1 row and 1 column
    if (grid.children().length > 1) {
      console.log("yep");
      let lastRow = grid.children().last();
      lastRow.remove();
    } else {
      alert("This is your last row!");
    }
  });

  //   add columns
  $("#add-col").on("click", function () {
    console.log("add-col clicked");
    let lastRow = grid.children().last();
    let numOfCols = lastRow.children().length;
    // The columns spill over into a brand new row once there are
    // more than 13, so I'm setting a limit
    if (numOfCols < 13) {
      // loops through the rows in the parent div
      grid.find(".row").each(function () {
        let newCol = document.createElement("div");
        newCol.classList.add("col", "border", "border-dark", "p-5", "cell");
        this.append(newCol);
      });
    } else {
      alert("I think you have enough columns!");
    }
  });

  //   remove columns
  $("#remove-col").on("click", function () {
    console.log("remove-col clicked");
    let lastRow = grid.children().last();
    let numOfCols = lastRow.children().length;
    // again, ensuring there will always be at least 1 cell
    if (numOfCols > 1) {
      grid.find(".row").each(function () {
        $(this).children().last().remove();
      });
    } else {
      alert("This is your last column!");
    }
  });

  // COLOR FUNCTIONS
  // color selection
  let color;
  $("form").on("submit", function (event) {
    event.preventDefault();
    console.log("submitted");
    color = $("#color-select").val();
    console.log(color);
    $("#selected-color").html(`Selected color: ${color}`);
  });
  // change cell color
  $(".cell").on("click", function () {
    console.log("cell clicked");
    $(this).css("background-color", `${color}`);
    console.log(color);
  });

  // fill all cells
  $("#fill-all").on("click", function () {
    console.log("fill-all clicked");
    grid.find(".row").each(function () {
      $(this)
        .children()
        .each(function () {
          $(this).css("background-color", `${color}`);
        });
    });
  });

  // fill uncolored cells
  $("#fill-uncolored").on("click", function () {
    console.log("fill-uncolored clicked");
    grid.find(".row").each(function () {
      $(this)
        .children()
        .each(function () {
          // checks that the background-color property is not set to any color
          if ($(this).css("background-color") == "rgba(0, 0, 0, 0)") {
            $(this).css("background-color", `${color}`);
          }
        });
    });
  });

  // clear cells
  $("#clear-all").on("click", function () {
    console.log("clear-all clicked");
    grid.find(".row").each(function () {
      $(this)
        .children()
        .each(function () {
          $(this).css("background-color", "transparent");
        });
    });
  });
});
