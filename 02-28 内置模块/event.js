const EventEmiter = require("events");

const emiter = new EventEmiter();



emiter.on("lll", (data) => {
  console.log(data);
});

emiter.emit("lll", "111");