var img = document.getElementById('img');
var demoContainer = document.querySelector('#img-container');

var myTracker = new tracking.ColorTracker();

tracking.ColorTracker.registerColor('darkgreen', function (r, g, b) {
  if (r < 120   &&   r > 80   &&   g < 150  && b < 70) {
    return true;
  }
    return false;
});

tracking.ColorTracker.registerColor('lightgreen', function (r, g, b) {
  if (r < 30 && g < 100 && b < 30) {
    return true;
  }
  return false;
});

tracking.ColorTracker.registerColor('green', function (r, g, b) {
  if (r < 30 && g < 50 && b < 30) {
    return true;
  }
  return false;
});

tracking.ColorTracker.registerColor('black', function (r, g, b) {
  if (r > 5 && g < 35 && b > 5) {
    return true;
  }
  return false;
});

var colors = new tracking.ColorTracker(['darkgreen', 'green']);

myTracker.on('track', function (event) {
  if (event.data.length === 0) {
    console.log('no targets');
    event.data.forEach(function (rect) {
     });
  }
});

colors.on('track', function(event) {
  if(event.data.length === 0) {
    console.log('no targets');
  } else {
    console.log(event.data)
    event.data.forEach(function(rect) {
      console.log(rect)
      window.plot(rect.x, rect.y, rect.width, rect.height, rect.color);
    })
  }
})

tracking.track("#img", colors)
tracking.track("#img", myTracker);

window.plot = function (x, y, w, h, color) {
  var rect = document.createElement('div');
  document.querySelector('#img-container').appendChild(rect);
  rect.classList.add('rect');
  rect.style.border = '2px solid ' + color;
  rect.style.width = w + 'px';
  rect.style.height = h + 'px';
  rect.style.left = (img.offsetLeft + x) + 'px';
  rect.style.top = (img.offsetTop + y) + 'px';
};


// diff-cam-engine 

//set up webcam 
// var constraints = {
//   audio: false,
//   video: { width: 640, height: 480 }
// };
// navigator.mediaDevices.getUserMedia(constraints)
//   .then(success)
//   .catch(error);

// function success(stream) {
//   var video = document.getElementById('img');
//   video.srcObject = stream;
// }

// function error(error) {
//   console.log(error);
// }

// // diff-cam configuration 
// var video = document.getElementById('img');
// var canvas = document.getElementById('motion');
// var score = document.getElementById('score');

// function initSuccess() {
//   DiffCamEngine.start();
// }

// function initError() {
//   console.log('Something went wrong.');
// }

// function capture(payload) {
//   score.textContent = payload.score;
// }

// DiffCamEngine.init({
//   video: video,
//   motionCanvas: canvas,
//   initSuccessCallback: initSuccess,
//   initErrorCallback: initError,
//   captureCallback: capture
// });