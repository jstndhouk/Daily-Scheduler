//Gets the date and time at the top of the scheduler
let timeDate=$('.dtstyle');
let today=moment().format('MMMM Do YYYY, h:mm:ss a');
timeDate.text(today);
//makes it so the date and time refreshes every second

timeInterval=setInterval(function()
{
  let today=moment().format('MMMM Do YYYY, h:mm:ss a');
  timeDate.text(today);
},1000)

//selects the hour of the date
let hours=moment().format('H')

//selects all of the text boxes
let tickEl=document.querySelectorAll('.tick');

//loops through the textboxes and puts what is in them into local storage, each with a unique key.
for (i=0; i<tickEl.length; i++){
  let grabString="event"+i;
  tickEl[i].value=window.localStorage.getItem(grabString)
}

//Loops through the textboxes.  Changes their background color based off their index(associated by a difference of 6 with the hour of the day)
for(i=0;i<tickEl.length; i++){
  if (i<(hours-6)){
    tickEl[i].setAttribute('style', "background-color: darkgrey")
    }
  else if (i==(hours-6)){
    tickEl[i].setAttribute('style', "background-color: red")}
  else {
    tickEl[i].setAttribute('style', 'background-color: green')}
}

//grabs the submit button and stores the values in the textboxes into local storage to be used in loop in line 20.
let submitbtnEl=$('.submitbtn');
  submitbtnEl.on('click', function(){
    for (i=0; i<=tickEl.length-1; i++){
      let storageString="event"+i

      localStorage.setItem(storageString,tickEl[i].value)
    }})