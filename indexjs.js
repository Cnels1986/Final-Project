$("#forgotPasswordButton").on("click", function(){
  $("#forgotPassword1").toggle();
})
var progress = 0;

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
  var bar = document.getElementById("indexProgressFill");
  if(email.value === '' || split(email) === false){
    $(".helpContent").effect("shake");
    $(".invalidMessage").text("wrong");
    $('input').css("border", "1px solid #d0021b");
  }else if (split(email) === true) {
    progress = 33;
    $("#forgotPassword1").toggle();
    $("#forgotPassword2").toggle();
    $(bar).css("width", "33%");
    // move();
  }
});
