# 생각해보니 서버가 필요 없음..

from http.server import BaseHTTPRequestHandler, HTTPServer
class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("content-type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write("<h1>테스트</h1>".encode())

host = "localhost"
port = 8000

server = HTTPServer((host, port), MyHandler)
print(f"http://{host}:{port}")

try:
    server.serve_forever()
except:
    server.server_close()

