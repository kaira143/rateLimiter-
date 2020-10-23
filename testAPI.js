const { count } = require('console');
var rp = require('request-promise');
var options = {
    uri: 'http://localhost:4101/low-usage-endpoint',
};
 
function request(counter){
   return rp(options)
    .then(function (repos) {
        console.log('success >>> %s >>>> %d', new Date(), counter);
        return 
    })
    .catch(function (error) {
        // API call failed...
        console.log("error Failed >>>> ", error.message)
        return 
    });
}


setInterval(function(){
    for (let counter = 1 ; counter < 10 ; counter++){
        request(counter)
    }
},2000)