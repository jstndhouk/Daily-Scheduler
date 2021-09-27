let timeDate=$('.dtstyle');
let today=moment().format('MMMM Do YYYY, h:mm:ss a');
timeDate.text(today);

timeInterval=setInterval(function()
{
    let today=moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDate.text(today);
},1000)

  let hours=moment().format('H')
  let tickEl=document.querySelectorAll('.tick');

  for (i=0; i<tickEl.length; i++){
  let grabString="event"+i;
  tickEl[i].value=window.localStorage.getItem(grabString)}

  for(i=0;i<tickEl.length; i++){
  if (i<(hours-6)){
    tickEl[i].setAttribute('style', "background-color: darkgrey")
    }
  else if (i==(hours-6)){
    tickEl[i].setAttribute('style', "background-color: red")}
  else {
    tickEl[i].setAttribute('style', 'background-color: green')}
  }

  let submitbtnEl=$('.submitbtn');
  submitbtnEl.on('click', function(){
    for (i=0; i<=tickEl.length-1; i++){
      let storageString="event"+i

      localStorage.setItem(storageString,tickEl[i].value)
    }})