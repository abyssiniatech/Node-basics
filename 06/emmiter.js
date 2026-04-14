const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// listen
emitter.on("order", () => {
  console.log("This is the first emitter example");
});

// trigger event
emitter.emit("order");