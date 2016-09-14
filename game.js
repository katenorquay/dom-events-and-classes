// Don't change or delete this line! It waits until the DOM has loaded, then calls
// the start function. More info:
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  bindEventListeners(document.getElementsByClassName('board')[0].children)
}

function bindEventListeners (dots) {
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('contextmenu', makeGreen)
    dots[i].addEventListener('click', makeBlue)
    dots[i].addEventListener('dblclick', hide)
  }
}

function makeGreen (evt) {
  evt.preventDefault();
  evt.target.className = 'green';
  updateCounts();
}

// CREATE FUNCTION makeBlue HERE
function makeBlue(evt) {
  evt.target.className = 'blue';
  updateCounts();
}

function hide (evt) {
  evt.target.className = 'invisible';
  updateCounts();
}
// CREATE FUNCTION hide HERE

  var totals = {
    blue: 0,
    green: 0,
    invisible: 0
  }

function updateCounts() {
    totals.blue = document.querySelectorAll("div.blue").length;
    totals.green = document.querySelectorAll("div.green").length;
    totals.invisible = document.querySelectorAll("div.invisible").length;
    displayTotals(totals);
  }

  // WRITE CODE HERE TO COUNT BLUE, GREEN, AND INVISIBLE DOTS
    // var getDots = document.getElementsByClassName('board')[0].children;
    //   for (i = 0; i < getDots.length; i++) {
    //     if (getDots[i].classList.contains('blue')) {
    //       totals.blue += 1;
    //     } else if (getDots[i].classList.contains('green')) {
    //       totals.green += 1;
    //     } else if (getDots[i].classList.contains('invisible')) {
    //       totals.invisible += 1;
    //     }
    //   }

  // Once you've done the counting, this function will update the display

function displayTotals (totals) {
  for (var key in totals) {
    document.getElementById(key + '-total').innerHTML = totals[key]
  }
}
