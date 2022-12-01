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


var times = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM']
var calendarContainer = $("#calendar-container")
var currentDay = $("#currentDay")
// var eventTextarea = []
var timeHour
var currentTimeTwentyFour 
var currentTimeTwelve
var submitButton
var currentSubmitButton
var suffix = 0
var html
var storedHour
var hour = []
var hoursInDay = []
var timeId = []

// convert 24 hour clock to 12 clock and push those to an array
var convertHours = function() {
  currentTimeTwentyFour = dayjs().hour()
  currentTimeTwelve = dayjs().hour() % 12
  console.log(currentTimeTwentyFour)
  suffix = currentTimeTwentyFour >= 12 ? "PM":"AM";
  console.log(suffix)

  // get the hours for 12 hour clock
  var hours = (currentTimeTwentyFour % 12) || 12
  console.log(hours)


// get the times of the workday via 24 hour clock
  for(var i = 0; i < 24; i++) {
    if(i >= 9 && i  <= 22) {
      hoursInDay.push((i))
    }
  }
  console.log(hoursInDay)
}

convertHours()

 
// create a loop that will start at 9am and end at 5pm to display the hour blocks
$.each(hoursInDay, function(i, time) {

  // convert time from 24 hour to 12 hour clock
  var timeTwelve = (time % 12) || 12
  suffix = time >= 12 ? "PM":"AM";

  html = `
    <div id="hour-${time}" class="row time-block">
      <div class="col-2 col-md-1 hour text-center py-3">${timeTwelve}${suffix}</div>
      <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        <i class="fas fa-save" aria-hidden="true"></i>
      </button>
    </div>
  `  
  // place the time slot into the dom
  calendarContainer.append(html)
  
  console.log(calendarContainer.children('div').eq(i))
  // currentTimeTwentyFour = dayjs().hour()
  // currentTimeTwelve = dayjs().hour() % 12
  // console.log(currentTimeTwentyFour)
  // suffix = currentTimeTwentyFour >= 12 ? "PM":"AM";
  // console.log(suffix)
  
  
  // if (time.length === 3) {
    //   console.log(time.charAt(0))
    //   timeHour = time.charAt(0)
    // } else if (time.length === 4) {
      //   console.log(time.slice(0,2))
      //   timeHour = time.slice(0,2)
      // }
    console.log(time) 
      
      
  // if hour slot is equal to time prior than current time, add css class 'past'
  // if hour slot is equal to current time hour, add css class 'present'
  // if hour slot is equal to time after current time, add class 'future'
  if(time === dayjs().hour()) {
    // get the div with id of hour- current time and suffix to match the array items
    $(calendarContainer.children(`div[id="hour-${time}"]`)).addClass('present')
  } else if (time > dayjs().hour()) {
    $(calendarContainer.children(`div[id="hour-${time}"]`)).addClass('future')
  } else {
    $(calendarContainer.children(`div[id="hour-${time}"]`)).addClass('past')
  }

  
})



// get the submit button after the html is loaded to the dom
submitButton = $('button')

// when I click on the submit button add textarea content to localStorage
submitButton.on('click', function(e) {
   currentSubmitButton = $(this)
   console.log(currentSubmitButton)
    // get the value of the parent id
    console.log($(this).parent().attr('id'))
    //get the value of the textarea
    console.log($(this).prev())

    // set the time and text content to local storage
    localStorage.setItem($(this).parent().attr('id'), $(this).prev().val())

    // get the time and text content from local storage and show in textarea
    // storedHour = localStorage.getItem($(this).parent().attr('id'))
    // console.log(storedHour)
    // $(this).prev().val(storedHour)

    // when submit button is clicked, show message that item is stored in localStorage
    // set a timer for message to fadeout after a couple seconds

    var localStorageMessage =   `
      <p id="appointment-added-message">Appointment added to LocalStorage</p>
    `
    console.log(localStorageMessage)
    currentDay.append(localStorageMessage)

    setTimeout(function() {
      $("#appointment-added-message").fadeOut('fast')
    }, 3000)
})



// create init function to show local storage in textarea
// create a loop over the time period to start at 9am to iterate up to 10pm(22) 
// to then pull specific text data from local storage

var getTextFromLocalStorage = function() {
  for (var i = 9; i < 23; i++) {
    // console.log($(`#hour-${i} textarea`))
    // storedHour = localStorage.getItem($(`#hour-${i}`))
    storedHour = localStorage.getItem($("#hour-10"))
    console.log(localStorage.getItem($("#hour-10")))
  }
}

// getTextFromLocalStorage() 
console.log(localStorage.getItem($("hour-10")))


})
