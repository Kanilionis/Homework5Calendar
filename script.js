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

    $(".saveBtn").click(function(e){
        e.preventDefault();
        if(descriptionInput !== null){
        console.log(descriptionInput.text);
            } else{
            }
            localStorage.setItem("tasks", descriptionInput.text);
            })

function saveData(){

}
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
    };


  
  

//   var taskStr = JSON.stringify(descriptionInput);

//   function saveDescription(){
//   var descriptionSaved = taskStr[0];
//   descriptionInput.addAttribute("class", "hidden");
//   descriptionSaved.removeAttribute("class", "hidden");
//   localStorage.getItem("tasks", descriptionInput.value)
//   console.log(taskStr);

//   }
//   var savedTasks = localStorage.getItem("tasks");
    })