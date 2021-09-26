let timeDate=$('.dtstyle');
let today=moment().format('MMMM Do YYYY, h:mm:ss a');
timeDate.text(today);

timeInterval=setInterval(function()
{
    let today=moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDate.text(today);
},1000)

$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } 
  );

  let hours=moment().format('h')
  console.log(hours);
  let tickEl=document.querySelectorAll('.tick');


  for(i=0;i<tickEl.length; i++){
  if (i<(hours-6)){
    tickEl[i].setAttribute('style', "background-color:red")
    console.log(tickEl[i]);}
  else if (i==(hours-6))
    tickEl[i].setAttribute('style', "background-color: yellow")
  else 
    tickEl[i].setAttribute('style', 'background-color:blue')
  }
    

 
  