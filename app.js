const http = require("http");
const staticFile = require("./static-file.js");
const mainRouteController = require("./controllers/main.js");
const defaultRouteController = require("./controllers/default.js");
const gameRouteController = require("./controllers/game.js");
const voteRouteController = require("./controllers/vote.js");
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
    case "/game":
      gameRouteController(res);
      break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
  res.end("<h1>Скоро тут будет сервис рейтинга</h1>", "utf8");
});
server.listen(3005);
