var ping = require('ping')

var hosts = ['127.0.0.1', 'localhost']
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
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <style>
    
            * {
                padding: 0;
                margin: 0;
                margin-top: 5%;
                color : #C3CBD9;
                font-size: 20px;
            }
    
            body {
                background-color: #0D1117;
            }
    
            table {
                text-align: left;
                font-family: arial, sans-serif;
                border-collapse: collapse;
            }
    
            td, th {
                border: 1px solid #000000;
                text-align: left;
                padding: 8px;
            }
    
            tr:nth-child(even) {
                background-color: #232930;
            }
    
            input {
                padding: 3px;
                background-color: rgba(0, 0, 0, 0);
                border-radius: 7px;
                border-color: #C3CBD9;
            }
    
        </style>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PHANTOM SERVER</title>
    </head> 
    <body>
    <center>
        <h2>PHANTOM API ALPHA </h2>
            <table>
                <tr>
                    <th>Function</th>
                    <th>Result</th>
                </tr>
                <tr>
                    <td> <a href="/myserver"> <input type="button" value="My Server">  </a> </td>
                    <td>Your web server settings.</td>
                </tr>
                <tr>
                    <td> <a href="/blserver"> <input type="button" value="Bloble.io Server">  </a> </td>
                    <td>Bloble.io server settings.</td>
                </tr>
                <tr>
                    <td> <a href="/myconn"> <input type="button" value="My Connection">  </a> </td>
                    <td> Test your internet connection to see if it is stable or not sending packets. </td>
                </tr>
                <tr>
                    <td> <a href="/blconn"> <input type="button" value="Bloble.io Connection">  </a> </td>
                    <td>Test the connection to the bloble server to see if it is stable or not sending packets.</td>
                </tr>
                <td> <a href="/clear"> <input type="button" value="Clear">  </a> </td>
                <td>Clear Console</td>
            </table>
    </center>
    </body>
    </html>`)
})

server.get('/myserver', function(req, res) {
    shell.exec('./shells/MyServer.sh')
})

server.get('/blserver', function(req, res) {
    shell.exec('./shells/BlobleServer.sh')
})

server.get('/myconn', function(req, res) {
    shell.exec('./shells/MyConnection.sh')
})

server.get('/blconn', function(req, res) {
    shell.exec('./shells/BlobleConnection.sh')
})

server.get('/clear', function(req, res) {
    shell.exec('./shells/ClearConsole.sh')
})

host = "http://localhost"
port = 3000
server.listen(port, () => {
    console.log( '\x1b[36m%s\x1b[0m', "[PHANTOM] server online " + host + ":" + port)
})

