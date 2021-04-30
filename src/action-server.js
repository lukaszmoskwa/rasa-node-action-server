const express = require("express");
const { RasaAction } = require("./action");
const { RasaActionResponse } = require("./action-response");

class RasaNodeActionServer {
  actions = {};

  constructor(port = 5055, host = "localhost") {
    this.port = port;
    this.host = host;
    this.app = express();
    this.app.use(express.json());
  }

  start() {
    this.app.use("*", (req, res) => {
      const { body } = req;
      const { next_action } = body;
      return this.actions[next_action](
        new RasaAction(body),
        new RasaActionResponse(res)
      );
    });
    this.app.listen(this.port, this.host, () => {
      console.log(`RasaActionServer running on ${this.host}:${this.port}`);
    });
  }

  define(name, fun) {
    this.actions[name] = (body, res) => fun(body, res);
  }
}

module.exports = {
  RasaNodeActionServer,
};
