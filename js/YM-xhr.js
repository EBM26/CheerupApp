var XHR = function(){
  
  return new Promise(function(resolve, reject){ // Promise is a method that handles asynchronous calls

  var request = new XMLHttpRequest();
  request.open("GET", "http://api.yomomma.info/"); // formating the get request framework
  request.setRequestHeader("Content-Type", "application/json"); // further formatting the get request by requesting the header
  request.onreadystatechange = function() {
    console.log(request.readyState)
      if (request.readyState == 4) {

        var response = JSON.parse(request.responseText);
        resolve(response);

      }
  };


  request.send(); // actually sending the get request

  });
 

};