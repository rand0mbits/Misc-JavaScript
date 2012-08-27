// Add jQuery to the page
var jqueryscript = document.createElement("script"); jqueryscript.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"; document.body.appendChild(jqueryscript);

// find the timer and the time remaining
// $(window.frames[1].document).find("#TimeRemainingClock").text()

// click the "Next" button
// $(window.frames[1].document).find("#next_top")[0].click()

// Create an interval to execute every N seconds, check if the timer exists, if it doesn't, log that it doesn't and do nothhing
// if it does, check if it's at "00:00:00", if it is, click the "Next" button.
var myinterval = setInterval( function() { if ( $(window.frames[1].document).find("#TimeRemainingClock").length == 0 ) { console.log(new Date() + ": no clock. skipping."); } else if ($(window.frames[1].document).find("#TimeRemainingClock").text() == "00:00:00") { console.log(new Date() + ": clicking next" ); $(window.frames[1].document).find("#next_top")[0].click(); } }, 3000 );