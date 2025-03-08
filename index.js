function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function greet() {
      return "Hello, world!";
    }
    return greet;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      return "Hello from an anonymous function!";
    };
  }
  