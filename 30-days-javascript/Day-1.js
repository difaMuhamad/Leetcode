/**
 * @return {Function}
 */
var createHelloWorld = function () {
    const args = ["Hello World"]
    return function (...args) {

    }
};

f = createHelloWorld()
f()

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */