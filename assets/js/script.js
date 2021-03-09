//extract current day from moment JS
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(currentDay);


$(document).ready(function () {
    var timeBlockEl = $(".time-block");
    var textInput = $(".description");


    function timeBlockColors() {
        //get current hours in military time
        var timeNow = parseInt(moment().hour());
        //console.log(timeNow)

        // for each time-block El, run this function
        timeBlockEl.each( function (){

        //set variable to be an integer that is attained from the "hour__" id's
        var blockTime = parseInt($(this).attr("data-hour"));   
        console.log(blockTime);

            // To check the time and add the classes for background indicators
            if (blockTime == timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
                console.log(this)
            } else if (blockTime < timeNow) {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        })
            
    }


    timeBlockColors();
})

