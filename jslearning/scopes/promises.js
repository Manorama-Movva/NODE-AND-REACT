var condition= "pos";
var p= new Promise(function(resolve,reject)
{
    if(condition=="pos"){
        resolve("i good")
    }
    else{
        reject("oops")
    }

}
);
Promise.then(function(response){

})
.catch(function(errorResponse){

})