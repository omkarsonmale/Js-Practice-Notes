
//In JavaScript, data hiding or encapsulation can be achieved using closures and private variables. 
//By using closures, you can create a scope within a function where variables can be declared but aren't accessible from outside that function.
function createCounter() {
    let count = 0; // This variable is private to the createCounter function
  
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getCount: function() {
        return count;
      }
    };
  }
  
  let counter = createCounter();
  counter.increment();
  counter.increment();
  console.log(counter.getCount()); 
  counter.decrement();
  console.log(counter.getCount());// Output: 2
  // count variable is not directly accessible from outside the createCounter function
  // It can only be accessed and modified through the returned object's methods
  