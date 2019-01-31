var net = require('net');
var HOST = 'coc.waterphuket.com';
var PORT = 6969;
var client = new net.Socket();
var ans = [6,7,8,9,10]
var i = 0

client.connect(PORT, HOST, function() {
 console.log('CONNECTED TO: ' + HOST + ':' + PORT);
 client.write('5835512109');
});

client.on('data', function(data) {
	 console.log('DATA: ' + data);
	 if(data=="OK")
	 {
	 	client.write('' +ans[i])
	 }
	 if(data=="WRONG")
	 {
	 	client.write('' +ans[i])
	 }
	 if(data=="BINGO")
	 {

	 	client.destroy()
	 }
	 if(i == 5)
	 {
		 client.destroy()
	 }
	 i++


});

client.on('error', (err) => console.log(err))
// Add a 'close' event handler for the client socket
client.on('close', function() {
 console.log('Connection closed');
});
