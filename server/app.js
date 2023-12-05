const mqtt = require("mqtt");
const express = require("express");
const app = express();

const host = "245d28c8a27a42569750f87c3eb044d2.s2.eu.hivemq.cloud";
const port = 8883;
const websocketPort = 8884;
const username = "testravelware";
const password = "R12345678";

const options = {
  host: host,
  port: port,
  username: username,
  password: password,
  protocol: "mqtts",
};

const client = mqtt.connect(options);

client.on("connect", () => {
  console.log("Connected to HiveMQ Cloud");
  client.subscribe("mytopic");
});

client.on("message", (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
