console.log("test");

saveBtn = $('.saveBtn');

// setting time and format
function update() {
    var nowTime = moment();
    var currentDay = $('#currentDay');
    currentDay.text(nowTime.format("dddd, MMMM Do YYYY, HH:mm:ss a"));
};

// refreshing and rewriting time every 1000ms/1sec
$(document).ready(function() {
    update();
    setInterval(update, 1000);
});

var currentTime = moment();
console.log(currentTime.format("HH:mm:ss"))

// checking current time to task time, then adjusting class to alter CSS
function timeCheck() {
    x = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    console.log(x);
    for (i = 0; i < x.length; i++) {
    console.log(x[i]);
    console.log("#".concat(x[i]));
    console.log(currentTime.format("HH"));
    console.log(moment(x[i])._i);
    var past = moment(x[i]).isBefore(currentTime.format("HH"));
    var present = moment(x[i]).isSame(currentTime.format("HH"));
    if (past) {
        var target = $("#".concat(x[i]))
        target.addClass('past');
    } else if (present) {
        var target = $("#".concat(x[i]))
        target.addClass('present');
    } else {
        var target = $("#".concat(x[i]))
        target.addClass('future');
    }
}}

timeCheck();

// function saveContent(event) {
//     event.preventDefault();
    
//     var taskContent = $('.form-control').value;
//     console.log(taskContent);
//     localStorage.setItem("taskContent", JSON.stringify(taskContent));
// }
y = ['#9text', '#10text', '#11text']
x = ['#9write', '#10write', '#11write']
z = ['#9save', '#10save', '#11save']

saveBtn.on('click', function(event) {
    event.preventDefault();
    console.log(event);

    for (i = 0; i < y.length; i++) {
    var taskId = event.target.id;
    var taskContent = $(y[i]).val();
    console.log(taskContent);
    console.log(taskId);
    if (taskContent !== null) {
        localStorage.setItem(taskId, JSON.stringify(taskContent));
    } else {
        return;
    }
    };
    // for (i = 0; i < y.length; i++) {
    // var task = $(x[i]);
    // var taskContent = $(y[i]).val();
    // console.log($(y[i]));
    // // console.log(this[0].id);
    // console.log(task);
    // console.log(taskContent);
    // if (taskContent) {
    // localStorage.setItem("taskContent", JSON.stringify(taskContent));
    // // renderTask()
    // var savedTask = JSON.parse(localStorage.getItem("taskContent"));
    // console.log(savedTask);
    // if (savedTask !== null) {
    //     // var y[i]El = $('#'.contact(y[i]))
    //     // var savedEl = $('<p>')
    //     task.append("<p>" + savedTask + "</p>");
    //     // task.append(savedEl);
    //     // $('#'.concat(y[i])).val().push(savedTask);
    


    // on click of form save
    // loop through task.innerHTML
    // if task.innerHTML !== null, then set result to local storage, set taskcontent to empty
    // 
    // on load of page, retrive data from local storage



    // var savedTask = JSON.parse(localStorage.getItem("taskContent"));
    // console.log(savedTask);
    // if (savedTask !== null) {
    //     // var y[i]El = $('#'.contact(y[i]))
    //     var savedEl = $('<p>')
    //     savedEl.text(savedTask)
    //     task.append(savedEl);
    //     // $('#'.concat(y[i])).val().push(savedTask);
    // }
});

// // function renderTask() {
// //     var savedTask = JSON.parse(localStorage.getItem("taskContent"));
// //     if (savedTask !== null) {
//         $('#'.concat(y[i])).val().append('<p>' + savedTask + '</p>');
// //     }
// // }










// Working only

// for (i = 0; i < y.length; i++) {
//     var task = $(x[i]);
//     var taskContent = $(y[i]).val();
//     console.log($(y[i]));
//     console.log(task);
//     console.log(taskContent);
//     if (taskContent) {
//     localStorage.setItem("taskContent", JSON.stringify(taskContent));
//     // renderTask()
//     var savedTask = JSON.parse(localStorage.getItem("taskContent"));
//     console.log(savedTask);
//     if (savedTask !== null) {
//         task.append("<p>" + savedTask + "</p>");
//     }




// Everything BULK

// for (i = 0; i < y.length; i++) {
//     var task = $(x[i]);
//     var taskContent = $(y[i]).val();
//     console.log($(y[i]));
//     // console.log(this[0].id);
//     console.log(task);
//     console.log(taskContent);
//     if (taskContent) {
//     localStorage.setItem("taskContent", JSON.stringify(taskContent));
//     // renderTask()
//     var savedTask = JSON.parse(localStorage.getItem("taskContent"));
//     console.log(savedTask);
//     if (savedTask !== null) {
//         // var y[i]El = $('#'.contact(y[i]))
//         // var savedEl = $('<p>')
//         task.append("<p>" + savedTask + "</p>");
//         // task.append(savedEl);
//         // $('#'.concat(y[i])).val().push(savedTask);
//     }
