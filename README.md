ftp-basic-user-pass
===================

Builds on top of the [ftp-core](https://github.com/sdmp/ftp-core).

#install

```
npm install ftp-basic-user-pass
```

#examples

###hard coded object

server.js

```js
var Ftp = require('ftp-core')
var FtpUserPass = require('ftp-basic-user-pass')
var Socket = require('ftp-normal-sockets')

var myFtp = new Ftp()
    .extend(FtpUserPass({
    	joseph: '12345',
    	friends: 'lol insecure'
    }))
    .extend(Socket({ listen: 21 }))
```

###from JSON file

auth.json
```json
{
  "joseph": "12345",
  "friends": "lol insecure"
}
```

server.js
```js
var Ftp = require('ftp-core')
var FtpUserPass = require('ftp-basic-user-pass')
var Socket = require('ftp-normal-sockets')
var userPassMap = require('./auth.json')

var myFtp = new Ftp()
    .extend(FtpUserPass(userPassMap))
    .extend(Socket({ listen: 21 }))
```

#todo

- [ ] add tests
- [ ] in the docs, talk a bit about how ftp-core extensions work

#license

[VOL](http://veryopenlicense.com)
