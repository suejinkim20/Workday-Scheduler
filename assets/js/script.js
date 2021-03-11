$(document).ready(function () {
    //extract current day from moment.js
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").append(currentDay);

    var timeBlockEl = $(".time-block");

    // saveBtn event listener (.on(click) is jQuery)
    $(".saveBtn").on("click", function (event) {
        //console.log(this)
        event.preventDefault();
        // Get value of text area and set it to the variable "text"
        var text = $(this).siblings(".description").val();
        
        console.log($(this));
        console.log(text); 

        // set variable time to each time block's id
        var time = $(this).closest("div").attr("data-hour");
        console.log(time);

        // Save text in local storage with the "data-hour" as the key and the ".description" text as the value
        localStorage.setItem(time, text);
    })
    
    // for each time block's description area, set the value as whatever text we get item from local storage
    $("#block7 .description").val(localStorage.getItem("7"));
    $("#block8 .description").val(localStorage.getItem("8"));
    $("#block9 .description").val(localStorage.getItem("9"));
    $("#block10 .description").val(localStorage.getItem("10"));
    $("#block11 .description").val(localStorage.getItem("11"));
    $("#block12 .description").val(localStorage.getItem("12"));
    $("#block13 .description").val(localStorage.getItem("13"));
    $("#block14 .description").val(localStorage.getItem("14"));
    $("#block15 .description").val(localStorage.getItem("15"));
    $("#block16 .description").val(localStorage.getItem("16"));
    $("#block17 .description").val(localStorage.getItem("17"));

    function timeBlockColors() {
        //get current hours in military time
        var currentTime = parseInt(moment().hour());
        //console.log(timeNow)

        // for each time-block El, run this function
        timeBlockEl.each( function (){

        //set variable to be an integer that is attained from the "hour__" id's
        var blockTime = parseInt($(this).attr("data-hour"));   
        console.log(blockTime);

            // To check the time and add the classes for background indicators
            if (blockTime == currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
                console.log(this)
            } else if (blockTime < currentTime) {
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

    function clearEvents () {
        // clear events from local storage
        localStorage.clear();
        window.location.reload();
    }

    timeBlockColors();
    $(".clearBtn").click(clearEvents);
})

