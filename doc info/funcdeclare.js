//in js we can access a function in another way also

function access(){
    return{
        x:function print(){
            console.log("hii");
        },
        y:function print(){
            console.log("byee");
        }


    }
}
var outeraccess=access();
outeraccess.x();
outeraccess.y();
//we mostly x and y call it as method