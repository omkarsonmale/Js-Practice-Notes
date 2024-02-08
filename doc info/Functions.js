 var x=20;
a();
b();
console.log(x);
function a(){
    var x=100;
    console.log(x);
}
function b(){
    var x=10;
    console.log(x);
}

/*So there are two enviroment
 [memory envirement and code enviroment]-->This global execution context is get created and it get pushed inside the call stack
 There will be global scope inside that Global scope:Memory
   
 
*/
const h =()=>{
    console.log("hii");
}
h();