var ping = require('ping')

var hosts = ['127.0.0.1', '34.208.242.121', '44.241.80.149']
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? '[PHANTOM] ' + host + ' is alive' : '[PHANTOM] ' + host + ' is dead';
        console.log('\x1b[36m%s\x1b[0m', msg)
    })
})

var shell = require('shelljs')

const express = require('express')
const server = express()

server.get('/', function(req, res) {
    res.send(`<!doctypehtml><html lang="en"><head><style>*{padding:0;margin:0}ul{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#333}li{float:left}li a{display:block;color:#c9c9c9;text-align:center;padding:14px 16px;text-decoration:none}li a:hover{color:#fff}.menu1{color:#3d3d3d;margin-left:58%;margin-right:2%;font-size:20px}.menu2{color:#3d3d3d;margin-right:58%;margin-left:2%;font-size:20px}.server{padding:20px;float:right}.connection{padding:20px;float:left}</style><meta charset="UTF-8"><meta content="width=device-width,initial-scale=1"name="viewport"><title>PHANTOM Server</title></head><body><header><ul><li><a href="#logo">PHANTOM Server</a></li><li><a href="#home">Connection</a></li><li style="float:right"><a href="https://github.com/Git-Phantom/Bloble-Ping/blob/master/README.md"><button>Documentation</button></a></li></ul></header><div class="menu1"><div class="server"><h2>My Server</h2><hr><p>` + shell.exec('sh shells/MyServer.sh') + `</p></div></div><div class="menu2"><div class="connection"><h2>My Connection</h2><hr><p>` + shell.exec('sh shells/MyConnection.sh') + `</p></div></div><div class="menu1"><div class="server"><h2>Bloble Server</h2><hr><p>` + shell.exec('sh shells/BlobleServer.sh') + `</p></div></div><div class="menu2"><div class="connection"><h2>Bloble Connection</h2><hr><p>` + shell.exec('sh shells/BlobleConnection.sh') + `</p></div></div></body></html>`)
})

host = "http://localhost"
port = 3000
server.listen(port, () => {
    console.log( '\x1b[36m%s\x1b[0m', "[PHANTOM] server online " + host + ":" + port)
})


