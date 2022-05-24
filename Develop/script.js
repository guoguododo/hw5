let today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY, h:mm:ss a"));



const button = $('.btn-outline-primary');

//Add current date at the top of the planner 

//$(document).ready(function () {

  //Create code that adds in business hours (9am - 5pm) into file for adding in hourly events to the left of the 
  //event text box


  //Set styling so that business hours that have passed are greyed out;  if / else for time component 
  //Set styling so that the current time/hour is a red color;
  //Set styling so that hours that have not yet occured are in green 


  function currentTime() {
    let current = moment().hours();
    let time = 1;
     for (let i = 0; i<24; i++){
//$("div.container").children("div.row time-block").eq(i).children('.col-sm-10');

if (i<current){
  $("div.container").children().eq(i).children('.col-sm-10').attr('class', 'past col-sm-10 description')
  } else if (hour = current) {
    $("div.container").children().eq(i).children('.col-sm-10').attr('class', 'present col-sm-10 description')
  }  if (i>current) {
    $("div.container").children().eq(i).children('.col-sm-10').attr('class', 'future col-sm-10 description')
  }

}
  }

  currentTime()

  //Set up local storage to store persistent changes in events by timeblock

  button.on('click', function (event) {
    event.preventDefault();
    let text = $(this).siblings('.col-sm-10').val();
    let parent = $(this).parent().attr('id');
    localStorage.setItem(parent, JSON.stringify(text));

  })

  $('#1AM textarea').val(localStorage.getItem('1AM'));
  $('#2AM textarea').val(localStorage.getItem('2AM'));
  $('#3AM textarea').val(localStorage.getItem('3AM'));
  $('#4AM textarea').val(localStorage.getItem('4AM'));
  $('#5AM textarea').val(localStorage.getItem('5AM'));
  $('#6AM textarea').val(localStorage.getItem('6AM'));
  $('#7AM textarea').val(localStorage.getItem('7AM'));
  $('#8AM textarea').val(localStorage.getItem('8AM'));
  $('#9AM textarea').val(localStorage.getItem('9AM'));
  $('#10AM textarea').val(localStorage.getItem('10AM'));
  $('#11AM textarea').val(localStorage.getItem('11AM'));
  $('#12PM textarea').val(localStorage.getItem('12PM'));
  $('#1PM textarea').val(localStorage.getItem('1PM'));
  $('#2PM textarea').val(localStorage.getItem('2PM'));
  $('#3PM textarea').val(localStorage.getItem('3PM'));
  $('#4PM textarea').val(localStorage.getItem('4PM'));
  $('#5PM textarea').val(localStorage.getItem('5PM'));
  $('#6PM textarea').val(localStorage.getItem('6PM'));
  $('#7PM textarea').val(localStorage.getItem('7PM'));
  $('#8PM textarea').val(localStorage.getItem('8PM'));
  $('#9PM textarea').val(localStorage.getItem('9PM'));
  $('#10PM textarea').val(localStorage.getItem('10PM'));
  $('#11PM textarea').val(localStorage.getItem('11PM'));
  $('#12AM textarea').val(localStorage.getItem('12AM'));


// clear all the text entered
  $(".jumbotron").children(button).click(function() {
    localStorage.clear();
    location.reload();
    window.location.reload();
  })
 

//  console.log(parent);


////});