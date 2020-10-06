    
  $(document).ready(function(){

  var today = dayjs().format("MMMM, D, YYYY");
  var currentTime = dayjs().format();

  console.log(currentTime);
  $("#currentDay").text(today);

// do this for each row/time - change to 10, 11, etc - for 1:00 make the id 13
  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
  
  $(".clear-cal").on("click", function(){
    var textArea = $("#9 #10 #11 #12 #13 #14 #15 #16 #17.description").val();
    console.log(textArea);
    localStorage.clear();
    location.reload();
    });

  $(".saveBtn").on("click", function(){
    // e.preventDefault();
    var inputVal = $(this).siblings(".description").val();
    var id = $(this).parent().attr("id");
    // key = id, value = inputVal
        localStorage.setItem(id, inputVal);
        console.log(inputVal, id);
    })

  function colorChange(){
    // grabbing specific id
    var currentHour = moment().hours();
      console.log(currentHour);
    $(".time-block").each(function(){
      var timeBlocks = $(this).attr("id");
      console.log(timeBlocks);
          if(timeBlocks<currentHour){
              $(this).addClass("past");
          } else if(timeBlocks>currentHour){
              $(this).addClass("future");
          } else{
              $(this).addClass("present")
            }
            })
            }
colorChange()


})
 


      



    

  

