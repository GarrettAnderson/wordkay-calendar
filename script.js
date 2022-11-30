// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function() {
  $(function () {
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });


var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']
var calendarContainer = $("#calendar-container")
var eventTextarea = []
var submitButton
var html
var hour = []
var timeId = []

// create a loop that will start at 9am and end at 5pm to display the hour blocks
$.each(times, function(i, time) {
  html = `
    <div id="hour-${time}" class="row time-block past">
      <div class="col-2 col-md-1 hour text-center py-3">${time}</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
  `

  // hold the time and current index in variables
  hour.push(time)
  timeId.push(i)

  
  // place the time slot into the dom
  calendarContainer.append(html)
  
  // if hour slot is equal to time prior to current time, add css class 'past'
  // if hour slot is equal to current time hour, add css class 'present'
  // if hour slot is equal to time after current time, add class 'future'
  
  
})

eventTextarea.push($("textarea").val())
submitButton = $("button")
console.log(submitButton)

submitButton.on('click', function(e) {
    // get the value of the parent id
    console.log($(this).parent().attr('id'))
    //get the value of the textarea
    console.log($(this).prev().val())

    // set the time and text content to local storage
    localStorage.setItem($(this).parent().attr('id'), $(this).prev().val())

    // get the time and text content from local storage and show in textarea
    
})
// when I click on the submit button


})
