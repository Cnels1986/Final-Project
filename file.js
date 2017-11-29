// finds file name
var path = window.location.pathname;
var page = path.split("/").pop();
console.log( page );


// gets the date through javascript
var date = new Date();
var year = date.getFullYear();    //will store the year
var day = date.getDate();         //will store the days

// determines which month to display
var monthList = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

var monthName = monthList[date.getMonth()]; //will store the actual month name

//determines what day of the week it is
var dayList = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var dayOfWeek = dayList[date.getDay()];

var fullDate = dayOfWeek + ", " + monthName + " " + day + ", " + year;
console.log(fullDate);
document.getElementById("date").innerHTML = fullDate;


if(page == "gradeandreporting.html"){
  var startColor = '#d8d8d8';
  var endColor = '#33c7ba';

  window.onload = function onLoad() {
    var progressCircles =["circle1","circle2"]
    function createCircleProgress(divClass){
      var circle = new ProgressBar.Circle('.'+divClass, {
        color: startColor,
        duration: 3000,
        easing: 'bounce',
        strokeWidth: 7,
        trailWidth: 7,

        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          // circle.setText(value*100 + "%\nof class\ncompleted");
        }
      });

      // This will get the number from the page
      var value = ($('.'+divClass).attr('value') / 100);

      // This will determine the circumference of the circle
      circle.animate(value, {
        from: {color: startColor},
        to: {color: endColor}
      });
    }
    for(var i=0;i<progressCircles.length;i++){
      createCircleProgress(progressCircles[i]);
    }
  };
}

// hides the weekly schedule at page load
$('.calendar').hide();
// changes course list button to highlighted
$('.courseList').addClass('activeCourseNav');

// while clicked it will toggle the display between the list and calendar and also change the highlighted link
$('.courseList, .courseCalendar').on('click',
function()
{
  $('.schedule, .calendar').toggle();
  $('.courseList, .courseCalendar').toggleClass('activeCourseNav');
});

function checkCheckBox(){
  var boxList = document.getElementsByClassName('checkbox');
  for(var a=0 ; a<boxList.length; a++){
    if(boxList[a].checked == true)
      console.log("yup");
    else {
      console.log("nope");
    }
  }
}

var percentage = 50;

$('.progressBox').hide();
$('.coreCourse').hide();
$('.genEdBox').hide();
$('.cisBox').hide();
$('.engBox').hide();

$('.startButton').on('click', function(){
  $('.upcomingStart').slideUp();
  $('.progressBox').slideDown();
  $('.progressPercent').text(percentage + "%");
  $('.coreCourse').slideDown();
});

document.getElementById("checkbox").addEventListener("click", checkCheckBox);

$('.coreButton').hide();
$('.checkbox').on('click', function(){
  $('.coreButton').fadeIn();
})


// needs to check if a checkbox is checked to move on
$('.coreButton').on('click', function(){
  $('.coreCourse').slideUp();
  percentage = 60;
  $('.progressPercent').text(percentage + "%");
  $('.genEdBox').slideDown();

});

$('.cisButton').on('click', function(){
  $('.genEdBox').slideUp();
  percentage = 70;
  $('.progressPercent').text(percentage + "%");
  $('.cisBox').slideDown();
});

$('.engButton').on('click', function(){
  $('.genEdBox').slideUp();
  percentage = 70;
  $('.progressPercent').text(percentage + "%");
  $('.engBox').slideDown();
})

if(page == "upcomingcourses.html"){
// this code will fill the progress bar depending on the provided percentage
var x = document.getElementById("progressBar");
var width = 1;
var id = setInterval(frame, 10);

function frame() {
  if (width >= 100) {                 //clears if full
    clearInterval(id);
  } else if(width < percentage)       //fills bar until percentage
  {
    width++;
    x.style.width = width + '%';
  }
}

var helpMenu = document.getElementById('helpMenu');
var helpBtn = document.getElementById('helpButton');
var helpNextBtn = document.getElementById('helpNextButton');

var otherMenu = document.getElementById('otherMenu');
var otherMenu2 = document.getElementById('otherMenu2');
var changeMenu = document.getElementById('changeMenu');
var unavailableMenu = document.getElementById('unavailableMenu');
var otherButton = document.getElementById('otherMenuButton');



// displays the help menu when clicked
helpBtn.onclick = function(){
  helpMenu.style.display = "block";
}

otherButton.onclick = function(){
  otherMenu.style.display = "none";
  otherMenu2.style.display = "block";
}

helpNextBtn.onclick = function(){
  var helpRadio = document.getElementsByName('help');
  // checks which radio button is checked
  for(var a=0 ; a<helpRadio.length; a++){
    if(helpRadio[a].checked){
      if(helpRadio[a].value == "changeMajors"){
        helpMenu.style.display = "none";
        changeMenu.style.display = "block";
      }
      else if(helpRadio[a].value == "courseUnavailable"){
        helpMenu.style.display = "none";
        unavailableMenu.style.display = "block";
      }
      else if(helpRadio[a].value == "other"){
        helpMenu.style.display = "none";
        otherMenu.style.display = "block";
      }
    }
  }
}

var closeMenu = document.getElementById('closeMenu1');
// closes popup after completion
closeMenu.onclick = function(){
  unavailableMenu.style.display = "none";
}
closeMenu = document.getElementById('closeMenu2');
// closes popup after completion
closeMenu.onclick = function(){
  otherMenu2.style.display = "none";
}
closeMenu = document.getElementById('closeMenu3');
// closes popup after completion
closeMenu.onclick = function(){
  changeMenu.style.display = "none";
}


}
