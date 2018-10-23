// module.exports = exports =this

const db = require('../db/');
const log = require('../logger.js')(module);

function User(name) {
    this.name = name;
}

User.prototype.hello = function (who) {
    log(db.getPhrase("Hello") + ", " + who.name)
};

exports.User = User;
