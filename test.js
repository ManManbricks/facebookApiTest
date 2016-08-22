var readline = require('readline');
var request = require('request');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var message = "";
var access_token = "";
var url = ""; //'https://graph.facebook.com/me/feed';
var response = "";

function postMessage(access_token, message, response) {
    
    //Add Access token Parameter    
    var params = {
        access_token: access_token,
        message: message
    };

	// Send the request
    request.post({url: url, qs: params}, function(err, resp, body) {
      
      // Handle any errors that occur
      if (err) return console.log("Error occured: ", err);
		body = JSON.parse(body);
      if (body.error) return console.log("Error returned from facebook: ", body.error);

      // Generate output data
      var output = '<p>Message has been posted to your feed. Here is the id generated:</p>';
      output += '<pre>' + JSON.stringify(body, null, '\t') + '</pre>';
      
      // Send output as the response
      response.writeHeader(200, {'Content-Type': 'text/html'});
      response.end(output);
    });

}

rl.question('Enter a message : ', function(answer){
 
  message = answer;
  rl.question('Specify the URL and query string parameters needed for the request : ', function(answer){
 
  url = answer;
});
rl.close();
});







exports.postMessage = postMessage;