//There is a built-in method in JavaScript called “setTimeout”,

function fetchData( callback) {
    // simulate a network request
    setTimeout(function () {
      const data = "Some data from the server";
      callback(data);
    }, 1000); // 1 second delay to simulate async behavior
  }

  fetchData( function (result) {
  console.log(result);
});

//Another example

function printvalue(callback){
    setTimeout(function(){
        const data=" This is readnig correctly";
        callback(null,data); //null means no error
    },1000)
}
  
function cheackcallback(error,content){
    if(error){
        console.log("error");

    }
    else{
        console.log("correct content is:",content);
    }
}
printvalue(cheackcallback);