/*Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing 
scope during the compilation phase, before the code is executed. */
getname();
console.log(x);
var x=7;
function getname(){
    console.log("Hii coder");
}

/*1>   even though console.log(x) comes before the var x = 5 line, JavaScript doesn't throw an error. 
This is because ***var x is hoisted to the top of its scope**, so it exists but has the value undefined until it's assigned 5.*/

/*2>For variables declared with var, they are hoisted to the top of their scope, 
but only the ***declaration is hoisted, not the initialization*** (assigning a value) */

/*3>The declaration var x; is hoisted to the top, which means console.log(x) doesn't throw an error, but x is initially undefined. 
It's only later, at x = 5, that x gets the value assigned. That's why the first console.log(x) outputs undefined. */

/*4>The whole function sayHello() gets hoisted to the top, so when you call sayHello() before the actual function appears in the code,
 it still works because the entire function definition has been hoisted.*/

 /* When we declare variable first is memory creation done so it shows just indefined but when variable not get declare then memory 
 show error of value not defined */
 getname()
const getname=()=>{
    console.log("hello");
}
getname()
/*Arrow function behaves like a variable not like function so that why it shows error 
so in memory allocation phase just like variable it aslo undefined hetname*/

/*
When you inspect a web page in a browser's developer tools and navigate to the "Memory" or "Memory" tab, you might see information related to memory usage, allocations, and more.

The memory space you typically view and interact with in this section is often referred to as the "Heap." In programming, the heap is a region of memory where dynamically allocated memory resides. 
It's used for objects, variables, and data structures created during the execution of your JavaScript code. */
getname()
const getname=()=>{
    console.log("hello");
}
getname()
/*Arrow function behaves like a variable not like function so that why it shows error 
so in memory allocation phase just like variable it aslo undefined hetname*/

/*
When you inspect a web page in a browser's developer tools and navigate to the "Memory" or "Memory" tab, you might see information related to memory usage, allocations, and more.

The memory space you typically view and interact with in this section is often referred to as the "Heap." In programming, the heap is a region of memory where dynamically allocated memory resides. 
It's used for objects, variables, and data structures created during the execution of your JavaScript code. */

/*IMP Note is
When you declare the variable or function memory get create inside browe=ser memory scope
so that why for valriable it shows undefined val(declaration but not initialization )
and for function it shows proper value printed */

/*Absolutely! In JavaScript, there's a concept called "hoisting" that brings variable declarations (not their assignments) 
to the top of their scope during the compile phase.*/