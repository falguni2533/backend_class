const http = require("http");

const student = {
  name: "Manjeet",
  course: "BCA",
  city: "Agra"
};

const server = http.createServer((req, res) => {
    const method =req.method;
    const url =req.url;
    console.log (method,url);
    
  
  if (method === "GET" && url === "/") {
    res.writeHead(200, { "Content-Type": "application/json"});
    res.end(JSON.stringify(student));
  }

});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
