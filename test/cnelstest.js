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


// this code will fill the progress bar depending on the provided percentage
var x = document.getElementById("progressBar");
var width = 1;
var id = setInterval(frame, 10);
var percentage =50;
function frame() {
    if (width >= 100) {                 //clears if full
        clearInterval(id);
    } else if(width < percentage)       //fills bar until percentage
    {
        width++;
        x.style.width = width + '%';
    }
}


// // document.getElementById('nextButton').classList.add("greyOut");
// //
// // function checkChecked(box, button){
// //   document.getElementById(button).disabled = !box.checked;
// //   document.getElementById('nextButton').classList.remove("greyOut");
// // }
//
// document.getElementById('nextButton').classList.add("greyOut");
//
// var checks = document.getElementsByClassName('test');
// var checkBoxList = document.getElementById('checkBoxes');
// var sendbtn = document.getElementById('nextButton');
//
// function allTrue(nodeList) {
//   for (var i = 0; i < nodeList.length; i++) {
//     if (nodeList[i].checked === false) return false;
//   }
//   return true;
// }
//
// checkBoxList.addEventListener('click', function(event) {
//   sendbtn.disabled = true;
//   if (allTrue(checks)){
//     sendbtn.disabled = false;
//     document.getElementById('nextButton').classList.remove("greyOut");
//   }
// });

var bar = new ProgressBar.Circle(circle, {
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#33c7ba',
  from: { color: '#d8d8d8', width: 5},
  to: { color: '#33c7ba', width: 5 },
  //svgStyle: null

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('00');
    } else {
      circle.setText(value + "%\nof class\ncompleted");
    }

  }
});

//bar.text.style.fontFamily = '"Montserrat", sans-serif;';
//bar.text.style.fontSize = '30px';
bar.animate(.69);
