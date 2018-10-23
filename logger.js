// const log = require('../logger.js')(module);

module.exports = function (module) {
    return function (/*...*/) {
        const args = [module.filename].concat([].slice.call(arguments));
        console.log.apply(console, args);
    };
};
