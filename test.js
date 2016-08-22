var readline = require('readline');
var Twit = require('twit')

var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  
})



rl.question('Enter a post : ', function(answer){
 
  T.post('statuses/update', { status: answer }, function(err, data, response) {
  console.log(data)
})
})

/*var request = require('request');
//var api = require('./facebook');
//var oauth = require('./oauth')
 // app = express();

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var message = "";
var access_token = "595375967308784|YFmEHJfn4rVdif8KHpQW7Yxl17g";
var url = ""; //'https://graph.facebook.com/me/feed';
var response = "";
var quit = 'q';
function postMessage(access_token, message) {
    
    //Add Access token Parameter    
    var params = {
        access_token: access_token,
        message: message
    };

	// Send the request
    request.post({url: url, qs: params}, function(err, resp, body) {
      
      // Handle any errors that occur
      if (err) return console.log("Error occurred: ", err);
		body = JSON.parse(body);
      if (body.error) return console.log("Error returned from facebook: ", body.error);

      // Generate output data
      var output = 'Message has been posted to your feed. Here is the id generated:';
      output += '\n' + JSON.stringify(body, null, '\t') + '\n';
      console.log(output);
      // Send output as the response
      //response.writeHeader(200, {'Content-Type': 'text/html'});
      //response.end(output);
    });

}

rl.question('Enter a message : ', function(answer){
 
  message = answer;
  rl.question('Specify the URL and query string parameters needed for the request : ', function(answer){
 
      url = answer;
	  postMessage(access_token,message);
	  rl.question('Do you want to quit? enter q to quit', function(answer){
	  if(quit == answer)
          rl.close();
  });
  });
  
  
  
});



/*
// Setup middleware
app.use(express.static(__dirname));
app.use(express.bodyParser());

app.post('/post', function(req, res) {
  // Check to ensure user has a valid access_token
  if (oauth.access_token) {

    // Call function that contains API call to post on Facebook (see facebook.js)
    api.postMessage(oauth.access_token, req.body.message, res);
    
  } else {
    console.log("Couldn't confirm that user was authenticated. Redirecting to /");
    res.redirect('/');
  }
});

// Routes for OAuth calls
app.get('/login', oauth.login);
app.get('/callback', oauth.callback);

app.listen(80);




//exports.postMessage = postMessage;
*/