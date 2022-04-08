const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((request, response) => {
    const requestUrl = url.parse(request.url).pathname;

    if (requestUrl === "/") {
        fs.readFile("./index.html", null, (error, data) => {
            if (error) {
                response.writeHead(404);
                response.write(" File Not Found");
            } else {
                response.writeHead(200, {"Content-Type": "text/html"});
                response.write(data);
            }

        response.end(); // Untuk mengakhiri proses respons
    });
} else if (requestUrl === "/os-detail") {
    fs.readFile("./os-detail.json", null, (error, data) => {
        if (error) {
            response.writeHead(404);
            response.write(" File Not Found");
        } else {
            response.writeHead(200, {"Content-Type": "application/json"});
            response.write(data);
        }

    response.end(); // Untuk mengakhiri proses respons
});
} else {
    response.writeHead(404);
    response.write("File Not Found");
    response.end();
}
});

server.listen(8000);