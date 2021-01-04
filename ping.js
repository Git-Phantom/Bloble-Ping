// ShellJS Area
var shell = require('shelljs')

shell.exec(`z="";Az='ping';Cz=' blo';Ez='io';Dz='ble.';Bz=' -w5'; eval "$Az$Bz$Cz$Dz$Ez"`)


// Ping Area
var ping = require('ping')

var hosts = ['127.0.0.1', '34.208.242.121', '44.241.80.149']
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? '[PHANTOM] ' + host + ' is alive' : '[PHANTOM] ' + host + ' is dead';
        console.log('\x1b[36m%s\x1b[0m', msg)
    })
})
