console.log("test");

// setting time and format
function update() {
    var nowTime = moment();
    var currentDay = $('#currentDay');
    currentDay.text(nowTime.format("dddd, MMMM Do YYYY, h:mm:ss a"));
};

// refreshing and rewriting time ever 1000ms/1sec
$(document).ready(function() {
    update();
    setInterval(update, 1000);
});

var currentTime = moment();
console.log(currentTime.format("h:mm:ss"))

function timeCheck() {
    x = ["9:00:00", "10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00"]
    console.log(x);
    for (i = 0; i < 9; i++) {
    console.log(x[i]);
    console.log("#".concat(x[i]));
    var past = moment(x[i], "hh:mm:ss").isBefore(currentTime.format("hh:mm:ss"), "hh:mm:ss");
    if (past) {
        $("#".concat(x[i])).addClass('past');
    } else {
        $()
    }
}}

timeCheck()