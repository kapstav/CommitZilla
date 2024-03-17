// Exporting both functions together
module.exports = {
    helloWorld: function() {
      console.log('Hello, World!');
    },
    helloSum: function() {
      // Define variables
      var x = 3;
      var z = 8;
      // Calculate y
      var y = x + z;
      console.log('The sum of x and z is:', y);
      return y; // Return y for testing purposes
    }
  };
  