//extract current day from moment JS
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(currentDay);


$(document).ready(function () {
    var timeBlockEl = $(".time-block");
    var textInput = $(".description");

    // for each time block, run the function (https://api.jquery.com/each/)
    timeBlockEl.each(function(){
        // saveBtn click listener 
        $(".saveBtn").click( function () {

            // Get value of text area
            var text = textInput.val();
            console.log(text);

            // set variable time to each time block's id
            var time = timeBlockEl.attr("data-hour");
            console.log(time);

            // Save text in local storage with the "hour __" id as the key and the ".description" text as the value
            localStorage.setItem(time, text);
        })
    });

    // Get item from local storage and set the value to the corresponding time block's text area
    $("#block7 .description").val(localStorage.getItem("block7"));
    $("#block8 .description").val(localStorage.getItem("block8"));
    $("#block9 .description").val(localStorage.getItem("block9"));
    $("#block10 .description").val(localStorage.getItem("block10"));
    $("#block11 .description").val(localStorage.getItem("block11"));
    $("#block12 .description").val(localStorage.getItem("block12"));
    $("#block13 .description").val(localStorage.getItem("block13"));
    $("#block14 .description").val(localStorage.getItem("block14"));
    $("#block15 .description").val(localStorage.getItem("block15"));
    $("#block16 .description").val(localStorage.getItem("block16"));
    $("#block17 .description").val(localStorage.getItem("block17"));

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

    function clearEvents () {
        localStorage.clear();
        window.location.reload();
    }

    timeBlockColors();
    $(".clearBtn").click(clearEvents);
})

