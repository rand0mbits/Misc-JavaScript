/*
 * This is useful as a bookmark button if, when debugging, you need to dynamically add a script to the page being debugged.
 */
javascript:(function(url) { if(!url) { return; } var jqueryscript = document.createElement("script"); jqueryscript.src = url; document.body.appendChild(jqueryscript); })(prompt("URL of script to add:", "//code.jquery.com/jquery-migrate-1.2.1.min.js"));