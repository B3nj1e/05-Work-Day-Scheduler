console.log("test");

saveBtn = $('.saveBtn');

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
console.log(currentTime.format("hh:mm:ss"))

// checking current time to task time, then adjusting class to alter CSS
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
        $("#".concat(x[i])).addClass('future');
    }
}}

timeCheck();

// function saveContent(event) {
//     event.preventDefault();
    
//     var taskContent = $('.form-control').value;
//     console.log(taskContent);
//     localStorage.setItem("taskContent", JSON.stringify(taskContent));
// }
y = ['9text', '10text', '11text']

saveBtn.on('click', function(event) {
    event.preventDefault();

    for (i = 0; i < x.length; i++) {
    var task = $('#'.concat(y[i]));
    var taskContent = $('#'.concat(y[i])).val();
    console.log(taskContent);
    if (taskContent) {
    localStorage.setItem("taskContent", JSON.stringify(taskContent));
    // renderTask()
    }}

    var savedTask = JSON.parse(localStorage.getItem("taskContent"));
    console.log(savedTask);
    if (savedTask !== null) {
        // var y[i]El = $('#'.contact(y[i]))
        var savedEl = $('<p>')
        savedEl.text(savedTask)
        task.append(savedEl);
        // $('#'.concat(y[i])).val().push(savedTask);
    }
});

// // function renderTask() {
// //     var savedTask = JSON.parse(localStorage.getItem("taskContent"));
// //     if (savedTask !== null) {
//         $('#'.concat(y[i])).val().append('<p>' + savedTask + '</p>');
// //     }
// // }