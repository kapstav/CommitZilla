// Import the function to test
const helloModule = require('./aone');




// Test suite
describe('helloWorld function', () => {
  // Test case
  test('prints "Hello, World!." to the console', () => {
    // Mock console.log
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();

    // Call the function
    helloModule.helloWorld(); // Call helloWorld function

    // Expect console.log to have been called with 'Hello, World!'
    expect(consoleLogSpy).toHaveBeenCalledWith('Hello, World!');

    // Restore the original console.log
    consoleLogSpy.mockRestore();
  });
});

  describe('helloSum function', () => {
    // Test case
    test('calculates the sum correctly', () => {
        // Call the function
        const result = helloModule.helloSum();   // Call helloSum function

        // Expect the result to be 11
        expect(result).toBe(11);
    });
});

