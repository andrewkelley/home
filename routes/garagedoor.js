
/* open or close garage door */
var gpio = require("pi-gpio");

exports.action = function(req, res){
  gpio.open(7, "output", function(err) {    // Open pin 7 for output
    gpio.write(7, 1, function() {           // Set pin 7 high (1)
      gpio.close(7);                        // Close pin 7
    });
  });
  res.send("success"); 
};

