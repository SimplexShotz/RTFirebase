
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
      this.set = async function(p, val) {
        var path = p.split(".");
        var ref = database.ref(path.shift());
        var ret = ref;
        for (var i = 0; i < path.length; i++) {
          ret = ret.child(path[i]);
        }
        ret.set(val);
        return true;
      }
    };
  })();
  fb = new fb();
}

function draw() {
  background(50);
}
