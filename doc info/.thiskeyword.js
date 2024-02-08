//-->this in global space
// console.log(this);
// value of this keyword in global scope would be globalObject-window ,global


"use strict";
function printval(){
    console.log(this);
}
printval(); // This will output 'undefined' in strict mode.

//-->in strict mode-(this substitution)****
// Value of this keyword inside a function is *undefined* but beacause of *(this substitution) if we don't use "use strict" mode then the 
// value of this keyword would be get changed to globalObject which shows like window and any other 

//-->the value of this keyword also depens on how the function is called

// function x(){
//     console.log(this);
// }
// x(); //it will be undefined
// window.x();// it will be windows


//-->this inside a object methodes
const obj ={
    a:10,
    y:function(){
        console.log(this);
    },

}
obj.y();
// so code will give *obj value to this keyword*
//output ->{ a: 10, y: [Function: y] } and if i assign thos.a then it will give a

//-->call apply bind methods (sharing methodes)
//call ,apply ,bind all three are differenet methodes
//call methode
const student ={
     name:"nita" ,
     printname:function(){
        console.log(this.name);
     }

}

const student2 ={
    name:"raj",
};
student.printname.call(student2);

//How does this function behaves inside arrow function
//Arrow function don't provide their  own this binding
//**(it retains this value of the enclosing lexical context)** lets see it wiht example
const objnew ={


x: ()=>{
    console.log(this);
}
}
objnew.x(); //it will give window becaude as we see before it encloses exical content so function get lexically bind in global environment so it give vale as windows which is present in global scope

//--->Very Very very import this inside nested function

const objnes ={
    //enclosing lexical context
    x:function(){
        const val=()=>{
            console.log(this);
        }
 val();
    }

}
objnes.x(); //output will be { a: 10, y: [Function: y] }

//this inside DOM like in HTML (buttons and all)

