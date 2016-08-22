var readline = require('readline');
var rl = readline.createInterface({
	
  input: process.stdin,
  output: process.stdout
});
var Twit = require('twit');
var T = new Twit({
	
  consumer_key:         'Bz3cplaIPPVLWb0JcagmMKBkb',
  consumer_secret:      'BIc4XfpnID4wXMnPILJ1FIHmHSxtpQiM9ysDjP2fKYHNACGxMJ',
  access_token:         '185426580-xNTOHxpq1hrRLmGFomFnce7kOaypVZLHgVUFIyfm',
  access_token_secret:  'Y9tDNAYsW0NRkWYHlMtEMS2rBKbkJY8JPCUoa7phryW3o',
  timeout_ms:           60*1000,  
});

console.log( "What do you want to do?" );
console.log( "Enter 1 to post a comment" );
console.log( "Enter 2 to search twitter for all tweets" );
console.log( "Press exit to exit app" );
rl.prompt();

rl.on('line', (line) => {

	switch(line.trim()) {
		
    case "1":
      rl.question('Enter a post : ', function(answer){
             
			T.post('statuses/update', { status: answer }, function(err, data, response) {
			console.log(data)
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
					});
			   });
			});	 
       });
	break;
	case "exit": rl.close(); break;
    default:
      console.log(`Invalid option '${line.trim()}'`);
      break;
  }
  //console.log( "What do you want to do?" );
//console.log( "Enter 1 to post a comment" );
//console.log( "Press exit to exit app" );
  rl.prompt();
  
  }).on('close', () => {
  console.log('Thank You for using my app');
  console.log( "Exiting app..." );
  process.exit(0);
});


