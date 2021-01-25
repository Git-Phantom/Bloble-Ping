var ping = require('ping')

var hosts = ['127.0.0.1', '34.208.242.121', '44.241.80.149']
hosts.forEach(function(host){
    ping.sys.probe(host, function(isAlive){
        var msg = isAlive ? '\x1b[32m[PHANTOM] ' + host + ' is On\x1b[0m' : '\x1b[31m[PHANTOM] ' + host + ' is Off\x1b[0m'
        console.log('', msg)
    })
})
var shell = require('shelljs')

console.log('\x1b[36m[PHANTOM]-[ My Connection ] \x1b[0m\n')
shell.exec(`z="";Dz='.0.0';Bz=' -w5';Az='ping';Ez='.1';Cz=' 127';eval "$Az$Bz$Cz$Dz$Ez"`)
console.log('\n\x1b[34m--------------------[PHANTOM]-------------------- \x1b[0m\n')

console.log('\x1b[36m[PHANTOM]-[ Bloble.io Connection ] \x1b[0m\n')
shell.exec(`z="";Dz='ble.';Ez='io';Bz=' -w5';Az='ping';Cz=' blo';eval "$Az$Bz$Cz$Dz$Ez"`)
console.log('\n\x1b[34m--------------------[PHANTOM]-------------------- \x1b[0m\n')

console.log('\x1b[36m[PHANTOM]-[ My Server ] \x1b[0m\n')
shell.exec(`z="";Ez='1';Dz='0.0.';Bz='web ';Cz='127.';Az='what';eval "$Az$Bz$Cz$Dz$Ez"`)
console.log('\n\x1b[34m--------------------[PHANTOM]-------------------- \x1b[0m\n')

console.log('\x1b[36m[PHANTOM]-[ Bloble.io Server ] \x1b[0m\n')
shell.exec(`z="";Dz='://b';Ez='lobl';Bz='web ';Cz='http';Fz='e.io';Az='what';eval "$Az$Bz$Cz$Dz$Ez$Fz"`)
console.log('\n\x1b[34m--------------------[PHANTOM]-------------------- \x1b[0m\n')
