<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yash Ram Malhotra - Portfolio</title>
</head>
<body>
    <h1>Starting server...</h1>
    <script>
        // Simple HTTP server for the portfolio
        const http = require("http");
        const fs = require("fs");
        const path = require("path");
        
        const server = http.createServer((req, res) => {
            let filePath = req.url === "/" ? "/index.html" : req.url;
            filePath = path.join(__dirname, filePath);
            
            fs.readFile(filePath, (err, data) => {
                if (err) {
                    res.writeHead(404);
                    res.end("File not found");
                    return;
                }
                
                const ext = path.extname(filePath);
                let contentType = "text/html";
                
                if (ext === ".css") contentType = "text/css";
                if (ext === ".js") contentType = "application/javascript";
                
                res.writeHead(200, { "Content-Type": contentType });
                res.end(data);
            });
        });
        
        server.listen(5000, "0.0.0.0", () => {
            console.log("Portfolio running on http://localhost:5000");
        });
    </script>
</body>
</html>
