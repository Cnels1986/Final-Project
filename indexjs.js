$("#forgotPasswordButton").on("click", function(){
  $("#forgotPassword1").toggle();
})
var progress = 1;

function split(str){
  var email = str.value;
  email.toLowerCase();
  if(email.includes("@stevenscollege.edu") === true)
    return true; else return false;
}
function move(){
  var elem = document.getElementById("indexProgressFill");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame(){
    if(width >= 100){
      clearInterval(id);
    }else if(width < progress){
      width++;
      elem.style.width = width + "%";
    }
  }
}




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

})

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
$("#streetSubmit").on("click", function(){
  var street = document.getElementById("streetQuestion");
  if(street.value === "" || street.value !== "orange street"){
    $(".invalidMessage").text("wrong");
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }else if(street.value === "orange street"){
    $("#forgotPassword2").toggle();
    $("#forgotPassword3").toggle();
    $(".invalidMessage").text("");
    $('input').css("border", "1px solid #3bb9ba");
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
$("#colorSubmit").on("click", function(){
  var color = document.getElementById("colorQuestion");
  if(color.value === "" || color.value !== "maroon"){
    $(".invalidMessage").text("wrong");
    $('input').css("border", "1px solid #d0021b");
    $('.helpContent').effect('shake');
  }else if(color.value === "maroon"){
    $("#forgotPassword3").toggle();
    $("#forgotPassword4").toggle();
    $(".invalidMessage").text("");
    $('input').css("border", "1px solid #3bb9ba");
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
$("#finalBox").on("click", function(){
  $("#forgotPassword4").toggle();
});
$(".resendEmail").on("click", function(){
  $("#forgotPassword4").toggle();
});
