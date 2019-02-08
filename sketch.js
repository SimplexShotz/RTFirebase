
var firebase = (function() {
  var config = {
    apiKey: "AIzaSyC82qKSxASHV73ab3MhmfZOw1OUryZwEqI",
    authDomain: "realtimefirebasetest.firebaseapp.com",
    databaseURL: "https://realtimefirebasetest.firebaseio.com",
    projectId: "realtimefirebasetest",
    storageBucket: "realtimefirebasetest.appspot.com",
    messagingSenderId: "628446710214"
  };
  fb.initializeApp(config);
  var database = fb.database();
  return function() {
    this.get = async function(r) {
      var ret;
      await database.ref(r).once("value", function(data) {
        ret = data.val();
      }
      return ret;
    };
  };
})();

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // Initialize Firebase
  
}

function draw() {
  background(50);
}
