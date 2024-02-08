setTimeout(() => {
    console.log("printing after 5000mlsec")
    
}, 5000);

const print={
    a:function print(){
       console.log("this is first");
    },
    b:function print(){
        console.log("this is second");
     },
    c:function print(){
        console.log("this is third");
     },
    s:"hiii"
}

print.a();
print.c();
console.log(print.s);

setTimeout(function print(){
    console.log("printing after 3000mlsec")
},3000)