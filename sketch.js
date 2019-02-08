
var fb;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  fb = (function() {
    var config = {
      apiKey: "AIzaSyC82qKSxASHV73ab3MhmfZOw1OUryZwEqI",
      authDomain: "realtimefirebasetest.firebaseapp.com",
      databaseURL: "https://realtimefirebasetest.firebaseio.com",
      projectId: "realtimefirebasetest",
      storageBucket: "realtimefirebasetest.appspot.com",
      messagingSenderId: "628446710214"
    };
    firebase.initializeApp(config);
    var database = firebase.database();
    return function() {
      this.get = async function(r) {
        var ret;
        await database.ref(r).once("value", function(data) {
          ret = data.val();
        });
        return ret;
      };
    };
  })();
  fb = new fb();
}

function draw() {
  background(50);
}
