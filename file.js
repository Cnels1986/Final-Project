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

// combines everything together to create the date
var fullDate = dayOfWeek + ", " + monthName + " " + day + ", " + year;
console.log(fullDate);
document.getElementById("date").innerHTML = fullDate;


// determines if its the grades and reporting page
if(page == "gradeandreporting.html"){
  var startColor = '#d8d8d8';
  var endColor = '#33c7ba';

  // creates the circular progress bar on the page load
  // plugin found at:
  // https://kimmobrunfeldt.github.io/progressbar.js/
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

if(page == 'currentschedule.html'){

// hides the weekly schedule at page load
$('.schedule').hide();
// changes course list button to highlighted
$('.courseCalendar').addClass('activeCourseNav');

// while clicked it will toggle the display between the list and calendar and also change the highlighted link
$('.courseList, .courseCalendar').on('click',
function()
{
  $('.schedule, .calendar').toggle();
  $('.courseList, .courseCalendar').toggleClass('activeCourseNav');
});
}
var percentage = 50;

// hides the various popup menus until they're needed
$('.progressBox').hide();
$('.coreCourse').hide();
$('.genEdBox').hide();
$('.cisBox').hide();
$('.engBox').hide();
$('.regMenu').hide()

// initial page, progress bar and checkboxes appear when clicked
$('.startButton').on('click', function(){
  $('.upcomingStart').slideUp();
  $('.progressBox').slideDown();
  // changes percentage on page
  $('.progressPercent').text(percentage + "%");
  $('.coreCourse').slideDown();
});


// will store all the courseName objects
var courseArray = [];

// function checks the different check boxes and adds the checked courses to an array for later use
function checkboxCourses(){
  var checked = document.getElementsByClassName('checkbox');

  for(var a=0; a<checked.length; a++){
    // if the check box is checked, determines which course is selected
    if(checked[a].checked == true)
    // CSET 155
    if(checked[a].value == '1'){
      var course ={
        number : "CSET 155",
        name : "Database Design"
      }
      courseArray.push(course);
    }
    // CSET 160
    else if(checked[a].value == '2'){
      var course ={
        number : "CSET 160",
        name : "Web Development II"
      }
      courseArray.push(course);
    }
    // CSET 170
    else if(checked[a].value == '3'){
      var course ={
        number : "CSET 170",
        name : "Security & Professional Ethics"
      }
      courseArray.push(course);
    }
    // CSET 180
    else if(checked[a].value == '4'){
      var course ={
        number : "CSET 180",
        name : "Software Project II"
      }
      courseArray.push(course);
    }
  }
  // displays selected courses for debugging purposes
  for(var b=0; b< courseArray.length; b++){
    console.log(courseArray[b].name);
  }
}

// function finds what CIS class was selected
function checkCIS(){
  // retrieves the selected radio button's value
  var cisCourse = document.querySelector('input[name = "cis"]:checked').value;

  // CIS 105
  if(cisCourse == '1'){
    var course ={
      number : "CIS 105",
      name : "Drawing with AutoCAD"
    }
    courseArray.push(course);
  }
  // CIS 111
  else if(cisCourse == '2'){
    var course ={
      number : "CIS 111",
      name : "Introduction to Computer Applications"
    }
    courseArray.push(course);
  }
  // CIS 211
  else if(cisCourse == '3'){
    var course ={
      number : "CIS 211",
      name : "Microsoft Excel"
    }
    courseArray.push(course);
  }
}

// function finds what english course was selected
function checkENG(){
  // retrieves the selected radio button's value
  var ENGCourse = document.querySelector('input[name = "eng"]:checked').value;

  // ENG 106
  if(ENGCourse == '1'){
    var course ={
      number : "ENG 106",
      name : "English Composition"
    }
    courseArray.push(course);
  }
  // ENG 116
  else if(ENGCourse == '2'){
    var course ={
      number : "ENG 116",
      name : "Public Speaking"
    }
    courseArray.push(course);
  }
  // ENG 216
  else if(ENGCourse == '3'){
    var course ={
      number : "ENG 216",
      name : "Short Story and Poetry"
    }
    courseArray.push(course);
  }
  // ENG 221
  else if(ENGCourse == '4'){
    var course ={
      number : "ENG 221",
      name : "Short Contemporary Novel"
    }
    courseArray.push(course);
  }
  // ENG 225
  else if(ENGCourse == '5'){
    var course ={
      number : "ENG 225",
      name : "Technical Report Writing"
    }
    courseArray.push(course);
  }
}

function displayCourses(){
  // document.getElementById('regMenu').innerHTML = courseArray;
  for(var a=0; a < courseArray.length; a++){
    var hThree = document.createElement("h3");
    var number = document.createTextNode(courseArray[a].number);
    hThree.appendChild(number);

    var pee = document.createElement("p");
    var name = document.createTextNode(courseArray[a].name);
    pee.appendChild(name);

    document.getElementById('regMenu').appendChild(hThree);
    document.getElementById('regMenu').appendChild(pee);
  }
}

$('.coreButton').click(function () {
  // determines if one or more of the checkboxes are checked, won't proceed until it does
  var oneIsChecked = $('input:checkbox').is(':checked');
  // if one is checked, page will proceed
  if(oneIsChecked === true){
    checkboxCourses();
    $('.coreCourse').slideUp();
    percentage = 60;
    $('.progressPercent').text(percentage + "%");
    $('.genEdBox').slideDown();
  }
});

// will display gened pages depending on what's selected
// cis course selection
$('.cisButton').on('click', function(){
  $('.genEdBox').slideUp();
  percentage = 70;
  $('.progressPercent').text(percentage + "%");
  $('.cisBox').slideDown();
});
// eng course selection
$('.engButton').on('click', function(){
  $('.genEdBox').slideUp();
  percentage = 70;
  $('.progressPercent').text(percentage + "%");
  $('.engBox').slideDown();
});

// checks the selected courses when the registration button is clicked
$('.CISButton').on('click', function(){
  var oneIsChecked = $('input:radio').is(':checked');
  if(oneIsChecked === true){
    checkCIS();
    $('.cisBox').slideUp();
    percentage = 100;
    $('.progressPercent').text(percentage + "%");
    $('.regMenu').slideDown();
    displayCourses();
  }
});

$('.ENGButton').on('click', function(){
  var oneIsChecked = $('input:radio').is(':checked');
  if(oneIsChecked === true){
    checkENG();
    $('.engBox').slideUp();
    percentage = 100;
    $('.progressPercent').text(percentage + "%");
    $('.regMenu').slideDown();
    displayCourses();
  }
});

if(page == "upcomingcourses.html"){
  // this code will fill the progress bar depending on the provided percentage
  // example found at
  // https://www.w3schools.com/howto/howto_js_progressbar.asp
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

  // creates the different variables needed for the help menu popup, can be improved using jquery
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
    // otherMenu2.style.display = "block";
    $('#otherMenu2').show();
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
  closeMenu = document.getElementById('testbutton');
  // closes popup after completion
  closeMenu.onclick = function(){
    $('#otherMenu2').hide();
    // otherMenu2.style.display = "none";
  }
  closeMenu = document.getElementById('closeMenu3');
  // closes popup after completion
  closeMenu.onclick = function(){
    changeMenu.style.display = "none";
  }
}

// displays the logout pop when button is clicked
$('#logOutButton').on('click', function(){
  $('#logOut').toggle();
});
// hides logout popup when clicked
$('#nevermind').on('click', function(){
  $('#logOut').toggle();
});



// function determines if the phone number is in the correct format xxx-xxx-xxxx
function phonenumber(inputtxt) {
  var phoneno = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
  if(inputtxt.value.match(phoneno)) {
    return true;
  }
  else {
    return false;
  }
}

function checkPhone(phone1, phone2){
  // checks if there's missing input
  if(phone1.value === '' || phone2.value === ''){
    $('.invalidMessage').text("Phone Number Missing");
    // change border color of textfields
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
    $
  }
  // phone numbers in the wrong format
  else if(phonenumber(phone1) === false || phonenumber(phone2) === false){
    $('.invalidMessage').text("Wrong Format");
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }
  // if the two numbers are not the same
  else if(phone1.value != phone2.value){
    $('.invalidMessage').text("Phone Numbers Not The Same");
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }
  // phone numbers match
  else if(phone1.value == phone2.value){
    return true;
  }
}

// shows phone number popup
$('#cellphoneEdit').on('click', function(){
  $('.invalidMessage').text('');
  $('input').css("border", "1px solid #3bb9ba");
  $('#changePhone').toggle();
});
// checks and compares phone numbers
$('#changePhoneButton').on('click', function(){
  // gets the values from the text fields
  var phone1 = document.getElementById('phone1');
  var phone2 = document.getElementById('phone2');
  if(checkPhone(phone1, phone2) === true){
    document.getElementById('cellphone').innerHTML = phone1.value;
    $('#changePhone').toggle();
    $('#phoneConfirm').toggle();
  }
});
$('#confirmButtonPhone').on('click', function(){
  $('#phoneConfirm').toggle();
});



// javascript to change the alternate phone number
$('#altCellPhoneEdit').on('click', function(){
  $('.invalidMessage').text('');
  $('input').css("border", "1px solid #3bb9ba");
  $('#changeAltPhone').toggle();
});
// checks and compares alternate phone numbers
$('#changeAltPhoneButton').on('click', function(){
  // gets the values from the text fields
  var phone1 = document.getElementById('altphone1');
  var phone2 = document.getElementById('altphone2');
  if(checkPhone(phone1, phone2) === true){
    document.getElementById('altCellphone').innerHTML = phone1.value;
    $('#changeAltPhone').toggle();
    $('#altPhoneConfirm').toggle();
  }
});

$('#confirmButtonAltPhone').on("click", function(){
  $('#altPhoneConfirm').toggle();
})



// checks both emails entered to make sure they are in the right format
function verifyEmail(email1, email2){
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if(reg.test(email1.value) === true && reg.test(email2.value)){
    return true;
  }
}



// javascript to change the address
$('#addressEdit').on('click', function(){
  $('.invalidMessage').text('');
  $('input').css("border", "1px solid #3bb9ba");
  $('#changeAddress').toggle();
});
$('#changeAddressButton').on('click', function(){
  // creates variables from the different input
  var street = document.getElementById('street');
  var city = document.getElementById('city');
  var state = document.getElementById('state');
  var zip = document.getElementById('zip');

  // if one of the fields is empty
  if(street.value === "" || city.value === "" || state.value === "" || zip.value === ""){
    $('.invalidMessage').text("Missing Information");
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }
  else{
    document.getElementById('address1').innerHTML = street.value + ", " + city.value + ",";
    document.getElementById('address2').innerHTML = state.value + " " + zip.value;
    $('#changeAddress').toggle();
    $('#addressConfirm').toggle();
  }
});
$('#confirmButtonAddress').on('click', function(){
  $('#addressConfirm').toggle();
})



// javascript to change the alternate email address, checks if its in the correct format too
$('#altEmailEdit').on('click', function(){
  $('.invalidMessage').text('');
  $('input').css("border", "1px solid #3bb9ba");
  $('#changeAltEmail').toggle();
})
$('#changeEmailButton').on('click', function(){
  var email1 = document.getElementById('email1');
  var email2 = document.getElementById('email2');

  verifyEmail(email1, email2);
  // empty values
  if(email1.value === '' || email2.value === ''){
    $('.invalidMessage').text('Email Address Missing');
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }
  // not matching emails
  else if(email1.value != email2.value){
    $('.invalidMessage').text('Email Address Not The Same');
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }
  // emails are not in the right format
  else if(verifyEmail(email1, email2) === false){
    $('.invalidMessage').text('Wrong Format');
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }
  else if(email1.value == email2.value){
    document.getElementById('altEmail').innerHTML = email1.value;
    $('#changeAltEmail').toggle();
    $('#altEmailConfirm').toggle();
  }
});

$('#confirmButtonAltEmail').on('click', function(){
  $('#altEmailConfirm').toggle();
})



// to change the school address
$('#schoolAddressEdit').on('click', function(){
  $('.invalidMessage').text('');
  $('input').css("border", "1px solid #3bb9ba");
  $('#changeSchoolAddress').toggle();
});
$('#changeSchoolAddressButton').on('click', function(){
  // creates variables from the different input
  var street = document.getElementById('school_street');
  var building = document.getElementById('school_building');
  var city = document.getElementById('school_city');
  var state = document.getElementById('school_state');
  var zip = document.getElementById('school_zip');

  // if one of the fields is empty
  if(street.value === "" || city.value === "" || state.value === "" || zip.value === "" || building.value === ""){
    $('.invalidMessage').text("Missing Information");
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }
  else{
    document.getElementById('schoolAddress').innerHTML = street.value + ", " + city.value + ",";
    document.getElementById('schoolBuilding').innerHTML = building.value;
    document.getElementById('schoolAddress2').innerHTML = state.value + " " + zip.value;
    $('#changeSchoolAddress').toggle();
    $('#schoolAddressConfirm').toggle();
  }
});
$('#confirmButtonSchool').on('click', function(){
  $('#schoolAddressConfirm').toggle();
});


if(page == "dashboard.html"){
  var startColor = '#d8d8d8';
  var endColor = '#33c7ba';

  // creates the circular progress bar on the page load
  // plugin found at:
  // https://kimmobrunfeldt.github.io/progressbar.js/
  window.onload = function onLoad() {
    var progressCircles =["dashCircle1", "dashCircle2", "dashCircle3", "dashCircle4", "dashCircle5", "dashCircle6"]
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
$("#viewcalendar").on('click', function(){
  window.location.href = "currentschedule.html";
})
