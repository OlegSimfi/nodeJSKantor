// module.exports = exports =this
const db = require('./db/index');
const log = require('./logger.js')(module);
db.connect();

const user = require('./user/index.js');

function run() {
    const vasya = new user.User("Вася");
    const petya = new user.User("Петя");

vasya.hello(petya);

log(db.getPhrase("Run successful"))
}

if (module.parent){
    exports.run = run;
} else {
    run();
}