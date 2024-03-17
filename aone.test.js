// Import the function to test
const helloWorld = require('./aone');

// Test suite
describe('helloWorld function', () => {
  // Test case
  test('prints "Hello, World!." to the console', () => {
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    // Call the function
    helloWorld();

    // Expect console.log to have been called with 'Hello, World!'
    expect(consoleLogSpy).toHaveBeenCalledWith('Hello, World!..!');

    // Restore the original console.log
    consoleLogSpy.mockRestore();
  });
});
