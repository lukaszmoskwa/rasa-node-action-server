class RasaActionResponse {
  /**
   * Constructor of the Rasa Action Response
   * @param {Response} res Express response object
   */
  constructor(res) {
    this.res = res;
    this.events = [];
    this.responses = [];
  }

  /**
   * Add a response to the Action Response object
   * @param {object} response Response to return to Rasa
   */
  addResponse(response) {
    this.response.push(response);
    return this;
  }

  /**
   * Add an event of type RasaActionEvent to the Action Response object
   * @param {RasaActionEvent} event Event ot be added
   */
  addEvent(event) {
    this.events.push(event);
    return this;
  }

  /**
   * Sends back the response to Rasa
   */
  send() {
    const data = {
      events: this.events,
      responses: this.responses,
    };
    return this.res.json(data).end();
  }
}

module.exports = {
  RasaActionResponse,
};
