const express = require('express')
const app = express()

var ping = require('ping');

var shell = require('shelljs');

var server = "http://localhost"
var port = 3000

app.get('/', function(req, res) {
    res.send('<!doctypehtml><html><head><style type="text/css">*{padding:0;margin:0}.hdr ul{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#222}.hdr li{float:left}.hdr li a{display:block;color:#6a6a6a;text-align:center;padding:18px 20px;text-decoration:none}.hdr li a:hover{color:#fff}.set{background-color:#fff}.hdr .logo{margin-left:120px;margin-right:20px;color:#6a6a6a}.block{margin-top:25px;margin-bottom:25px;padding:.1px;background-color:#cecece}.intro{font-size:17px;margin-top:15px;padding:20px;margin-left:3%;margin-right:3%;color:#3d3d3d;background-color:#ededed;border-radius:5px;border:3px solid #cecece}</style><meta charset="utf-8"><title>API Start</title></head><body><header class="hdr"><ul><li><a class="logo">GIT-PHANTOM [ API ]</a></li><li><a href="/"class="home set">Home</a></li><li><a href="/start"class="start">Start</a></li><li style="float:right"><a href="http://github.com/Git-Phantom/"class="docs">Documentation</a></li></ul></header><div class="intro"><div class="c1"><h2>What is an API?</h2><br><p>API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API.</p></div><div class="block"></div><div class="c2"><h2>What is the purpose of this API?</h2><br><ul style="margin-left:30px"><li>Game Ping.</li><li>Today Points.</li><li>List Game Servers.</li><li>About Power.</li></ul></div><div class="block"></div><div class="c3"><h2>How does the API get my data?</h2><br><ul style="margin-left:30px"><li>Client ( You ).</li><li style="margin-left:30px;list-style-type:circle">The Client sends a request to the API, requesting the game data.</li><li>API Work</li><li style="margin-left:30px;list-style-type:circle">With the data you requested, she "enters" the game and receives all information about the game as a normal player.</li><li>Return</li><li style="margin-left:30px;list-style-type:circle">After she has taken all the requested data she returns everything to the client.</li><li>Extra</li><li style="margin-left:30px;list-style-type:circle">In case you think (So all she does is give me the game data that I can have myself, so I wont use it) . ( You are right, but the API brings the simplified data that in the game does not have for example [power spent], This can be used to calculate how much you spend to make your base )</li></div><div class="block"></div><div class="c4"><h2>Knowledge in HTML & CSS</h2><br><p>You have knowledge in HTML and CSS, you can fork this page and personalize it and your edition can become an API official, to make a page click on the fork below (GitHub).</p><br><center><a href=""><img src="https://img.shields.io/badge/Fork%20in-GitHub-cecece"></a></center></div><div class="block"></div><div class="c5"><h2>Ask your questions</h2><br><p>Are you having trouble learning to use the API? enter my <a href="https://discord.gg/hdDrK7dPkd">Discord Server.</a></p></div></div></body></html>')
})


var hosts = ['127.0.0.1', '34.208.242.121'];
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? '[PHANTOM] ' + host + ' is alive' : '[PHANTOM] ' + host + ' is dead';
        console.log('\x1b[36m%s\x1b[0m', msg)
    })
})

shell.exec('sh shell/pingcheck.sh')

app.get('/start', function(req, res) {
//res.sendFile(__dirname + '/api.html')
res.send('<!doctypehtml><html><head><style type="text/css">*{padding:0;margin:0}.hdr ul{list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:#222}.hdr li{float:left}.hdr li a{display:block;color:#6a6a6a;text-align:center;padding:18px 20px;text-decoration:none}.hdr li a:hover{color:#fff}.set{background-color:#fff}.hdr .logo{margin-left:120px;margin-right:20px;color:#6a6a6a}.ping{color:#3d3d3d;margin-left:58%;margin-right:2%;font-size:25px}.c1{padding:20px;float:right}.r1{color:#636b00}.user{color:#3d3d3d;margin-right:: 58%;margin-left:: 2%;font-size:25px}.c2{padding:20px;float:left}.r2{color:#636b00;margin-left:20px}</style><meta charset="utf-8"><title>API Start</title></head><body><header class="hdr"><ul><li><a class="logo">GIT-PHANTOM [ API ]</a></li><li><a class="home"href="/">Home</a></li><li><a class="set start"href="/start">Start</a></li><li style="float:right"><a class="docs"href="http://github.com/Git-Phantom/">Documentation</a></li></ul></header><div class="ping"><dir class="c1"><h2>Connections</h2><hr><div class="r1"><p style="color:#3d3d3d">Bloble.io</p><p>' + shell.exec('sh shell/bloble.sh') + '</p><hr><p style="color:#3d3d3d">Host</p><p>' + shell.exec('sh shell/api.shell.sh') + '</p></div></dir></div><dir class="user"><div class="c2"><h2>User Info</h2><hr><div class="r2"><ul><li>Name :</li><hr><li>Power :</li><hr><li>Power Spent :</li><hr><li>Power Gain :</li><hr><li>Game Time :</li></ul></div></div></dir></body></html>')
})

app.listen(port, () => {
    console.log( '\x1b[36m%s\x1b[0m', "[PHANTOM] server online " + server + ":" + port)
})
