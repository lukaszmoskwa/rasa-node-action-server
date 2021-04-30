class RasaActionResponse {
  constructor(res) {
    this.res = res;
    this.events = [];
    this.responses = [];
  }

  addEvent(eventName) {
    return {
      slot: (name, value) => {
        this.events.push({
          event: "slot",
          name,
          value,
        });
        return this;
      },
      bot: (text, data = {}) => {
        this.events.push({
          event: "bot",
          text,
          data,
        });
        return this;
      },
    }[eventName];
  }

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
