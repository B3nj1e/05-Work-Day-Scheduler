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
