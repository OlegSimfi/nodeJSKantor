const util = require('util');

const phrases = {
    "Hello": "Привет",
    "World": "Мир"
};

//message name stack
function  PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'PhraseError';


function HttpError(status, message) {
    this.status = status;
    this.message = message;
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';

function  getPhrase(name) {
    if(!phrases[name]){
        throw  new PhraseError("Нет такой фразы:" + name); // HTTP 500
    }
    return phrases[name];
}

function makePage(url) {
    if (url != 'index.html'){
        throw new HttpError (404, "Нет такой страницы"); // HTTP 404
    }
    return util.format("%s, %s!", getPhrase("Hello"), getPhrase("World"));
}

try {
    const page = makePage('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError){
        console.log(e.status, e.message);
    } else {
        console.error("Ошибка %s\n сообщене: %s\n стек: %s", e.name, e.message, e.stack);
    }
}
