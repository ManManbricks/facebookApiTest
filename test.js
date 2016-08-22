var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'Bz3cplaIPPVLWb0JcagmMKBkb',
  consumer_secret:      'BIc4XfpnID4wXMnPILJ1FIHmHSxtpQiM9ysDjP2fKYHNACGxMJ',
  access_token:         '185426580-xNTOHxpq1hrRLmGFomFnce7kOaypVZLHgVUFIyfm',
  access_token_secret:  'Y9tDNAYsW0NRkWYHlMtEMS2rBKbkJY8JPCUoa7phryW3o',
  timeout_ms:           60*1000,  
})

var quit = 'q';

rl.question('Enter a post : ', function(answer){
 
  T.post('statuses/update', { status: answer }, function(err, data, response) {
  console.log(data)
})
})

