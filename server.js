const user = require('./user/index.js');

const vasya = new user.User("Вася");
const petya = new user.User("Петя");

vasya.hello(petya);



