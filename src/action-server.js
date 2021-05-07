const express = require("express");
const { RasaAction } = require("./action");
const { RasaActionResponse } = require("./action-response");

class RasaNodeActionServer {
  actions = {};

  /**
   * Constructor of the RasaNodeActionServer
   * @param {number} port Port of the express server
   * @param {string} host Host of the express server
   */
  constructor(port = 5055, host = "localhost") {
    this.port = port;
    this.host = host;
    this.app = express();
    this.app.use(express.json());
  }

  /**
   * Run the express server and register every request as an Action request
   */
  start() {
    // Register the endpoint for actions
    this.app.use("*", (req, res) => {
      const { body } = req;
      const { next_action } = body;
      if (!this.actions[next_action]) {
        console.log(`No action registered with name: ${next_action}`);
        return new RasaActionResponse(res).addResponse({
          text: "No such action",
        });
      }
      return this.actions[next_action](
        new RasaAction(body),
        new RasaActionResponse(res)
      );
    });
    // Start listening on the selected host and port
    this.app.listen(this.port, this.host, () => {
      for (const action in this.actions) {
        console.log(`${action} action registered!`);
      }
      console.log(`RasaActionServer running on ${this.host}:${this.port}`);
    });
  }

  /**
   * Register a new action in the action server
   * @param {string} name Name of the action to define
   * @param {function} fun Function associated with the action
   */
  define(name, fun) {
    this.actions[name] = (body, res) => fun(body, res);
  }
}

module.exports = {
  RasaNodeActionServer,
};
