 const http =require("http");
 const server = http.createServer((req, res) => {  // Extract useful information from the request
  const method = req.method;
  const url = req.url;
if (method === "GET" && url === "/") ({
    res:end("hello world")});
});

server.listen(3000,()=>{
    console.log("server is running on port 3000")
});