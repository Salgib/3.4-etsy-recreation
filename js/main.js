(function(){
  'use strict';

  var url = "https://api.etsy.com/v2/listings/active.js?api_key=bnvy6l16m2bwahu9wz7ejkk2&keywords=whiskey&includes=Images,Shop";


fetchJSONP(url, app);

  /*
    Call this function with the URL where the JSON lives.
    We will pass a function as the second argument.
    That function will be called when the request finished.
    The argument to that function will be the JSON data.
    You will need to change the values for url.
  */

  // var ulElement = document.querySelector('.characters');

  function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}
  /*
   Etsy's API return data in a slightly different format.
   Extract the data accordingly
 */

 function app(response) {
   
   var products = response.results;
   console.log(products);
  //  displayCharacterNames(characters);
 }
 //
 // function displayCharacterNames(characters) {
 //   var source   = document.querySelector("#character-template").innerHTML;
 //   var template = Handlebars.compile(source);
 //   characters.forEach(function(character){
 //     var output = template(character);
 //     ulElement.insertAdjacentHTML('beforeend', output);
 //   });
 // }
})();
