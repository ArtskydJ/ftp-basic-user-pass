var codes = require('ftp-return-codes')

module.exports = function FtpBasicUserPass(userPassMap) {
	var userName = ''
	var loggedIn = false
	return {
		commands: {
			USER: function(core, user, cb) {
				var userExists = (Object.keys(userPassMap).indexOf(user) !== -1)
				userName = userExists ? user : ''
				cb(null, codes[userExists ? 331 : 530])
			},
			PASS: function (core, pass, cb) {
				loggedIn = userName && (userPassMap[userName] === pass)
				cb(null, codes[loggedIn ? 230 : 530])
			}
		},
		core: {
			isAuthenticated: function() {
				return loggedIn
			},
			getUserName: function() {
				return userName
			}
		}
	}
}
