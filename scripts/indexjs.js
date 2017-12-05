$("#forgotPasswordButton").on("click", function(){
  $(".invalidMessage").text("");
  $(".invalidWrong").text("");
  $('input').css("border", "1px solid #3bb9ba");
  $("#forgotPassword1").slideDown();
})


// sets the progress bar for the pop up to 1
var progress = 1;


// determines if "@stevenscollege.edu" is found in the given email
function split(str){
  var email = str.value;
  email.toLowerCase();
  if(email.includes("@stevenscollege.edu") === true)
    return true; else return false;
}




// checks to see if there's an email address and password also if the email address is correct... if so it loads the homepage, if not throws up error
$(".loginSubmitButton").on("click", function(){
  var email = document.getElementById("loginEmail");
  var password = document.getElementById("loginPassword");
  if(email.value === "" || password.value === ""){
    $(".invalidWrong").text("wrong");
    $('input').css("border", "1px solid #d0021b");
    $('.loginBox').effect('shake');
  }else if(split(email) === false){
    $(".invalidWrong").text("SUper duper wrong");
  }else if (split(email) === true && password.value != "") {
    window.location.href = "pages/home.html";
  }
});




// popup to find user's email address
$("#indexSubmit").on("click", function(){
  var email = document.getElementById("emailAddress");
  if(email.value === '' || split(email) === false){
    $(".helpContent").effect("shake");
    $(".invalidMessage").text("wrong");
    $('input').css("border", "1px solid #d0021b");
  }else if (split(email) === true) {
    progress = 33;
    $("#forgotPassword1").toggle();
    $("#forgotPassword2").toggle();
    $(".invalidMessage").text("");
    $('input').css("border", "1px solid #3bb9ba");
    // creates initial progress bar on popup
    var bar = new ProgressBar.Line(indexProgress1, {
      strokeWidth: 3,
      easing: 'easeInOut',
      duration: 1400,
      color: '#3bb9ba',
      trailColor: '#4a4a4a',
      trailWidth: 3,
      svgStyle: {width: '100%', height: '100%'}
    });
    bar.animate(.33);
  }
});



// popup to find the street user grew up on, orange street or orange st are acceptable
$("#streetSubmit").on("click", function(){
  var street = document.getElementById("streetQuestion");
  var temp = street.value;
  var lowerStreet = temp.toLowerCase();
  console.log(lowerStreet);
  if(lowerStreet === "" || (lowerStreet !== "orange street" && lowerStreet !== "orange st")){
    $(".invalidMessage").text("Incorrect Answer");
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }else if(lowerStreet === "orange street" || lowerStreet === "orange st"){
    $("#forgotPassword2").toggle();
    $("#forgotPassword3").toggle();
    $(".invalidMessage").text("");
    $('input').css("border", "1px solid #3bb9ba");
    // updates progress bar on popup
    var bar = new ProgressBar.Line(indexProgress2, {
      strokeWidth: 3,
      easing: 'easeInOut',
      duration: 1400,
      color: '#3bb9ba',
      trailColor: '#4a4a4a',
      trailWidth: 3,
      svgStyle: {width: '100%', height: '100%'}
    });
    bar.animate(.66);
  }
});



// popup finds the users favorite color, maroon is only acceptable answer
$("#colorSubmit").on("click", function(){
  var color = document.getElementById("colorQuestion");
  var temp = color.value;
  var lowerColor = temp.toLowerCase();
  if(lowerColor === "" || lowerColor !== "maroon"){
    $(".invalidMessage").text("Incorrect Answer");
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }else if(lowerColor === "maroon"){
    $("#forgotPassword3").toggle();
    $("#forgotPassword4").toggle();
    $(".invalidMessage").text("");
    $('input').css("border", "1px solid #3bb9ba");
    // updates progress bar on popup
    var bar = new ProgressBar.Line(indexProgress3, {
      strokeWidth: 3,
      easing: 'easeInOut',
      duration: 1400,
      color: '#3bb9ba',
      trailColor: '#4a4a4a',
      trailWidth: 3,
      svgStyle: {width: '100%', height: '100%'}
    });
    bar.animate(1.0);
  }
});




// final popup box, hides display once either button is pressed
$("#finalBox").on("click", function(){
  $("#forgotPassword4").slideUp();
});
$(".resendEmail").on("click", function(){
  $("#forgotPassword4").slideUp();
});
