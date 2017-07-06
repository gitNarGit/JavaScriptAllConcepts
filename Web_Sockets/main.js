<script>
//web was always stateless
//after AJAX technology, it became available to somehow imitate long connections.
//different techniques were trying to achieve this:
//for example long polling and short polling
//with long polling techinque, we can make a request (comet), and the server will create a loop, and whenever new data is available it is sent to the client.
//short polling is just making AJAX requests every set period of times.

//Web Sockets
//they are made for persistent connection for browser-server.
//they ys WS protocol (wire protocol) example: ws://w3schools.com
//web socket must be implemented both: in browser and server.
//Almost all latest versions of browsers have this realization.
//The server should be configured to us ws, because it's not the usual http
//the process: at first browser-server are sending headers to each other, and after it connecting to each other for unlimited time
//cross-origin requests are allowed. You can send data to other server
//WebSocket starts like a simple http, but after headers, it became TCP Socket connection
</script>
