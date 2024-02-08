/*Ex1*/
function outerFunction() {
  const outerVariable = "I am from the outer function";
  
  function innerFunction() {
    return outerVariable ; 
  }
  
  const  a=innerFunction(); 
  console.log(a);
}


outerFunction();

/*Ex2*/
function outerFunction2() {
    function innerFunction2() {
      console.log("outerVariable"); 
    }
    
    innerFunction2(); 
  }
  
outerFunction2(); 
  
  

  