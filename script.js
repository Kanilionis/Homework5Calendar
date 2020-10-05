    $(document).ready(function(){

   var currentDay = document.querySelector("#currentDay")
   var saveBtn = document.getElementsByClassName("saveBtn");
   var descriptionInput = document.getElementsByClassName("description");
  //  var timeOfDay = document.querySelector(".hour");
  //  var newTask = $(".description").val();
   var today = dayjs().format("MMMM, D, YYYY");
   var timeBlock = dayjs().hour(8);

//   function openCalendar(){
  currentDay.textContent = today;
  console.log(today);
    }
  )
    
        
      
    
    // })
    // if(today !==)
 
    // make object of time blocks
    // turn each "description" of time block into string
    // save to local storage, pull from local storage based on index position

    
    // var hours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
    // for(var i=0; i<hours.length; i++){
    //   console.log(i)

    // var currentHour = parseInt(dayjs().format('H'));
    // console.log(currentHour)



    
      //find text content of description at each hour
    // var timeBlocks = [
    //   {
    //     hour: dayjs(),
    //         description: descriptionInput
    //   },
    //   {
    //   hour: hours[1],
    //   hour3: hours[2],
    //   hour4: hours[3],
    //   hour5: hours[4],
    //   hour6: hours[5],
    //   hour7: hours[6],
    //   hour8: hours[7],
    // ]

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