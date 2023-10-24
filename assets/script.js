// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    //added the time to top of page
    var date = dayjs().toDate()
    
    var t = document.getElementById('current-date')
    t.textContent = date
    var currentTime = dayjs().hour()
    var calendarContainer = document.getElementById('calendar-container')

    var hours = [{
        time:"9"        
    },
    {
        time:"10"        
    },
    {
        time:"11"        
    },
    {
        time:"12"        
    },
    {
        time:"13"        
    },
    {
        time:"14"        
    },
    {
        time:"15"        
    },
    {
        time:"16"        
    },
    {
        time:"17"        
    },
]
//print the time slots to the page based on time
    for (let i = 0; i < hours.length; ++i) {
        if (time === currentTime) {
            var currentTimeSlot = document.createElement('div');

            currentTimeSlot.textContent = time;
            calendarContainer.appendChild(currentTimeSlot);
        }
    }
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
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
