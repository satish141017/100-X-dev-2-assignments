/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            let x1 = new Date().getTime();
            
            resolve(x1);
        }, t*1000);
    });
}
function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            let x1 = new Date().getTime();
            
            resolve(x1);
        }, t*1000);
    });
}
function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(()=>{
            let x1 = new Date().getTime();
            resolve(x1);
        }, t*1000);
    });
}



function calculateTime(t1, t2, t3) {

    let x1 = new Date().getTime();
    let x2=0;
    let count=3;
    return new Promise(function(resolve){
        function fxn(){
            if(count==0){
                resolve(x2-x1);
            }
        }
         wait1(t1).then(function(val){
            x2 = val;
            count--;
            fxn();
            
        });
        wait2(t2).then(function(val){
            x2 = val;
            count--;
            fxn();
            
        });
        wait3(t3).then(function(val){
            x2 = val;
            count--;
            fxn();
         });

     });
     
  
}

module.exports = calculateTime;
