const EventEmitter = require('events').EventEmitter;

const db = new EventEmitter();

function Request() {
    const self = this;

    this.bigData = new Array(1e6).join('*');

    this.send = function (data) {
        console.log(data);
    };

    function onData(info){
        self.send(info);
    }

    this.end = function(){
        db.removeListener('data', onData)
    };

    db.on('data', onData);
}

setInterval(function () {
    const request = new Request();
    //...
    request.end();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
}, 200);
