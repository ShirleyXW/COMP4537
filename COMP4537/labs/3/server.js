import greeting from './netlify/functions/greeting.js';
import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === '/COMP4537/labs/3/') {
        const response = greeting({ queryStringParameters: parsedUrl.query });
        res.writeHead(response.statusCode, { 'Content-Type': 'text/html' });
        res.end(response.body);

    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
