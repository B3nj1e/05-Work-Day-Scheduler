console.log("test");

saveBtn = $('.saveBtn');

// setting time and format
function update() {
    var nowTime = moment();
    var currentDay = $('#currentDay');
    currentDay.text(nowTime.format("dddd, MMMM Do YYYY, H:mm:ss a"));
};

// refreshing and rewriting time every 1000ms/1sec
$(document).ready(function() {
    update();
    setInterval(update, 1000);
});

var currentTime = moment();
console.log(currentTime.format("H:mm:ss"))

// checking current time to task time, then adjusting class to alter CSS
function timeCheck() {
    x = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
    console.log(x);
    for (i = 0; i < x.length; i++) {
    console.log(x[i]);
    // console.log("#".concat(x[i]));
    console.log(currentTime.format('H'));
    // console.log(moment(x[i])._i);
    var past = moment(x[i]).isBefore(currentTime.format('H'));
    console.log(past);
    var past2 = x[i] < currentTime.format('H');
    var present = moment(x[i]).isSame(currentTime.format('H'));
    var present2 = x[i] == currentTime.format('H');
    console.log(present);
    if (past || past2) {
        var target = $("#".concat(x[i]))
        target.addClass('past');
    } else if (present || present2) {
        var target = $("#".concat(x[i]))
        target.addClass('present');
    } else {
        var target = $("#".concat(x[i]))
        target.addClass('future');
    }
}}

timeCheck();

y = ['#9text', '#10text', '#11text']
x = ['#9write', '#10write', '#11write']
z = ['#9save', '#10save', '#11save']
a = ['09', '10', '11', '12', '13', '14', '15', '16', '17']

saveBtn.on('click', function(event) {
    event.preventDefault();
    // working out the DOM transverse 
    console.log(event);
    console.log(event.data);
    console.log($(event.target).parent().parent().children());
    console.log('#'.concat($(event.target).parent().parent()[0].id).concat('text'));

    saveTask();
    renderTask();
});

// setting ID of save button, obtain text associated with save button, saving to local storage
function saveTask() {
    var taskId = $(event.target).parent().parent()[0].id;
    var taskIdHash = $('#'.concat(taskId).concat('text'));
    var taskContent = taskIdHash.val();
    console.log(taskContent);
    console.log(taskId);
    console.log(jQuery.type(taskId));
    if (taskContent !== null) {
        localStorage.setItem(taskId, JSON.stringify(taskContent));
}};

// function runs through all of the time periods, if there is a key value pair in local storage, it then writes it the innerHTML of the input variable
function renderTask() {
    for (i = 0; i < a.length; i++) {
    var savedTask = JSON.parse(localStorage.getItem(a[i]));
    console.log(savedTask);
    var writeLocation = $('#'.concat(a[i]).concat('text'));
    console.log(writeLocation);
    writeLocation[0].innerHTML = savedTask;
    }
};

renderTask();