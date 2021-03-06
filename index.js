const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me.html";
      break;
    default:
      path += "404.html";
      break;
  }

  res.setHeader("Content-type", "text/html");

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.end(data);
    }
  });
});

server.listen(8080, "localhost", () => {
  console.log("Server is listening");
});
