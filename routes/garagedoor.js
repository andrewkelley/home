
/* open or close garage door */
var gpio = require("pi-gpio");
var toggle = 0;

exports.action = function(req, res){
  if (toggle) {
    gpio.open(7, "output", function(err) {    // Open pin 7 for output
      gpio.write(7, 1, function() {           // Set pin 7 high (1)
        gpio.close(7);                        // Close pin 7
      });
    });
  } else {
    gpio.open(7, "output", function(err) {    // Open pin 7 for output
      gpio.write(7, 0, function() {           // Set pin 7 low (0)
        gpio.close(7);                        // Close pin 7
      });
    });
  } 
  toggle = !toggle;
  res.send("success"); 
};

