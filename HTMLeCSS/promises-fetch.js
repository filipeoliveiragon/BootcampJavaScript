const myPromise = ((resolved, reject) => {
    setTimeout(function(){
        resolved('First  data');
    }, 1000);
});

//Promisse pode ter 3 status
//Pending
//Fulfilled
//Reject


function doSomething(callback){
    setTimeout(function() {
        callback('First data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second data');
    }, 1000);
}

function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');
            try{
                doOtherThing(function(data2){
                    var processedData2 = data2.split('');
                    try{
                        setTimeout(function(){
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch(err) {

                    }
                });
            } catch (err) {

            }
        });
    } catch (err) {

    }
}

doAll();