const fileSystem = require("fs");

const requestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write('<html lang="en">');
    res.write("<head><title>Node</title></head>");
    res.write('<body><form action="/create-user" method="POST" ><input type="text" name="username" /><label>Username</label><button type="submit" >Submit</button></form></body>');
    res.write("</html>");
    res.end();
  }
  if (req.url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write('<html lang="en">');
    res.write("<head><title>Node</title></head>");
    res.write("<body><ul><li>User1</li><li>User2</li></ul></body>");
    res.write("</html>");
    res.end();
  }
  if (req.url === "/create-user" && req.method === "POST" ) {
    const body = []
    req.on("data" , (chunk) => {
        body.push(chunk)
        console.log(body)
        const message = Buffer.concat(body).toString();
        const text = decodeURIComponent(message.split("=")[1].replace(/\+/g , " "))
        console.log(text)
        fileSystem.writeFileSync("text.txt" , text )
    } )

    

    
    res.setHeader("Content-Type", "text/html");
    res.write('<html lang="en">');
    res.write("<head><title>Node</title></head>");
    res.write("<body><h1>Text File Created</h1></body>");
    res.write("</html>");
    res.end();
  }
};

module.exports = requestHandler;
