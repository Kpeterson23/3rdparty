$(function () {
  // TODO: Add a listener for click events on the save button.
  $(".save-btn").on("click", function () {
    const userInput = $(this).siblings("textarea").val();
    const timeBlockId = $(this).parent().attr("id");

    localStorage.setItem(timeBlockId, userInput);
  });

  // TODO: Add code to apply the past, present, or future class to each time block.

  const currentHour = dayjs().format("H");

  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const hour = parseInt(timeBlockId.split("-")[1]);

    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour > currentHour) {
      $(this).addClass("future");
    } else {
      $(this).addClass("present");
    }
  });

  // TODO: Add code to get and set user input from localStorage.
  $(".time-block").each(function () {
    const timeBlockId = $(this).attr("id");
    const savedUserInput = localStorage.getItem(timeBlockId);

    $(this).find("textarea").val(savedUserInput);
  });

  // TODO: Add code to display the current date in the header of the page.
  const currentDate = dayjs().format("MMMM D, YYYY");
  $("#currentDay").text(currentDate);

  window.onbeforeunload = function () {
    $(".save-btn").trigger("click");
  };
});
