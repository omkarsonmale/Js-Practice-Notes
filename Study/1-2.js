/*Closure means function along with its scope
  closure in JavaScript is a concept where a function can remember and 
  access its lexical scope even when the function is executed outside that scope.*/
/* closures in JavaScript are like self-contained bundles of functionality that remember the environment in which they were created.*/

function outside(){
    var value=" hi this is innerfunction";
    const inner =()=>{
        console.log(value);
    }
    return inner;

}
const accessouter=outside();
accessouter();

/*Data hiding*/
/*
In JavaScript, data hiding refers to the concept of restricting access to certain variables or functions from outside the scope they're defined in.
This helps in controlling how data is accessed and modified, promoting better security and encapsulation.*/

function createCounter() {
  let count = 0; // This variable is hidden from outside access

  function increment() {
    count++;
    console.log(count);
  }

  return {
    increment: increment // Returning only the increment function, hiding 'count'
  };
}

const counter = createCounter();
counter.increment(); // Outputs: 1
counter.increment(); // Outputs: 2
// Can't access 'count' directly, it's hidden

/*Another example */
 const external=()=>{
  var count1=0;
  return {
    increase:function(){
      count1++;
    },
    getvalue :function(){
      return count1;

    }
  };

 }
  const access=external();
  access.increase();
  access.increase();
  access.increase();
  console.log(access.getvalue());

  