const WebSocket = require ('ws');

var reconnectInterval = 1000 * 10
var ws;

var connect = function(){

const ws = new WebSocket ('wss://marketdata.tradermade.com/feedadv');

ws.on('open', function open() {
   ws.send("{\"userKey\":\"streaming_api_key\", \"symbol\":\"GBPUSD\"}");
});

ws.on('close', function() {
  console.log('socket close : will reconnect in ' + reconnectInterval );
  setTimeout(connect, reconnectInterval)
});

ws.on('message', function incoming(data) {
  console.log(data);
});
};
connect();
