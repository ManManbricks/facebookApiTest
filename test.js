require('dotenv').config();
var readline = require('readline');
var rl = readline.createInterface({
	
  input: process.stdin,
  output: process.stdout
});
var Twit = require('twit');
var T = new Twit({
	
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token:  process.env.access_token,
  access_token_secret: process.env.access_token_secret,
  timeout_ms:           60*1000,  
});
	
var ques = function(){
console.log("\n\n");
console.log( "What do you want to do?" );
console.log( "Enter 1 to post a comment" );
console.log( "Enter 2 to search twitter for all tweets" );
console.log( "Enter 3 to get list of user id's that follow a particular screen name" );
console.log( "Press exit to exit app" );
};

ques();
rl.prompt();

rl.on('line', (line) => {

	switch(line.trim()) {
		
    case "1":
	 
      rl.question('Enter a post : ', function(answer){
            
			T.post('statuses/update', { status: answer }, function(err, data, response) {
			console.log(data);
			ques();
			});
		});	
 		
    break;
	case "2":
	   rl.question("Enter word to search : ", function(word){
		   rl.question("Enter date limit format(YYYY-MM-DD): ", function(date){
			   rl.question("Enter maximum number of limit: ", function(limit){
				   
				   var text = word + " since:" + date;  
					T.get('search/tweets', { q: text, count: limit }, function(err, data, response) {
						 console.log(data)
						 ques();
					});
			   });
			});	 
       });
	break;
	
	case "3": 
		rl.question("Enter screen name (e.g. dave) : ", function(name){
		 
				T.get('followers/ids', { screen_name: name },  function (err, data, response) {
					console.log(data)
					ques();
				})
		});
		break;
	 
	case "exit": rl.close(); break;
    default:
      console.log(`Invalid option '${line.trim()}'`);
      break;
  }
 
  }).on('close', () => {
  console.log('Thank You for using my app');
  console.log( "Exiting app..." );
  process.exit(0);
});



