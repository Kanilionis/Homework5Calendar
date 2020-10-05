    $(document).ready(function(){

   var currentDay = document.querySelector("#currentDay")
   var saveBtn = document.getElementsByClassName("saveBtn");
   var descriptionInput = document.getElementsByClassName("description");
  //  var timeOfDay = document.querySelector(".hour");
  //  var newTask = $(".description").val();
   var today = dayjs().format("MMMM, D, YYYY");
   var currentTime = dayjs().format();
   console.log(currentTime);
   currentDay.textContent = today;
   var timeBlock = document.querySelector(".hour");
        timeBlock = dayjs().set("hour", 09);
        console.log(timeBlock);


// var startTime = dayjs().startOf("day");

// function timeBlockColors(){
//     if(dayjs().isBefore)
// }
// var isAfter = currentTime.isAfter()
// var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
// var getHours = dayjs().startOf("hour")

// function startCalendar(e){
//     e.preventDefault;
// }

var militaryHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
function timeBlockColors(){
    var militaryTime = dayjs().get("hour");
    console.log(militaryTime);
    for (var i=0; i<militaryHours.length; i++){
        if(militaryTime < militaryHours[i]){
            $(".description").attr(".future");
        } else if (militaryTime === militaryHours[i]){
            $(".description").attr(".present");
        } else if (militaryTime > militaryHours[i]){
            $(".description").attr(".past");
        }
        }
    }
}
    )
 
      
    
    // })
    // if(today !==)
 
    // make object of time blocks
    // turn each "description" of time block into string
    // save to local storage, pull from local storage based on index position

    
    
    // for(var i=0; i<hours.length; i++){
    //   console.log(i)

    // var currentHour = parseInt(dayjs().format('H'));
    // console.log(currentHour)



    
      //find text content of description at each hour
   

//    for(var i=0; i<timeBlocks.length; i++){

//    }
//   $(".saveBtn").click(function(e){
//     e.preventDefault();
//     if(newTask !== null){
//       console.log(descriptionInput.value);
//     } else{
      
//     }
//     localStorage.setItem("tasks", descriptionInput.value);
//   })

//   var taskStr = JSON.stringify(descriptionInput);

//   function saveDescription(){
//   var descriptionSaved = taskStr[0];
//   descriptionInput.addAttribute("class", "hidden");
//   descriptionSaved.removeAttribute("class", "hidden");
//   localStorage.getItem("tasks", descriptionInput.value)
//   console.log(taskStr);

//   }
//   var savedTasks = localStorage.getItem("tasks");
// })