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


// // javascript to create the circular progress bar for course completion
// var bar = new ProgressBar.Circle(circle, {
//   strokeWidth: 5,
//   trailWidth: 5,
//   easing: 'easeInOut',
//   duration: 1400,
//   color: '#33c7ba',
//   from: { color: '#d8d8d8', width: 5},
//   to: { color: '#33c7ba', width: 5 },
//   //svgStyle: null
//
//   step: function(state, circle) {
//     circle.path.setAttribute('stroke', state.color);
//     circle.path.setAttribute('stroke-width', state.width);
//
//     var value = Math.round(circle.value() * 100);
//     if (value === 0) {
//       circle.setText('00');
//     } else {
//       circle.setText(value + "%\nof class\ncompleted");
//       console.log(circle.text);
//     }
//
//   }
// });
//
// bar.animate(.69);




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
          circle.setText(value*100 + "%\nof class\ncompleted");
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
