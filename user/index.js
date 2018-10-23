const phrases = require('./ru.json');
function Index(name) {
    this.name = name;
}

Index.prototype.hello = function (who) {
    console.log(phrases.Hello + ", " + who.name)
};

console.log("user.js is required!");

exports.User = Index;
