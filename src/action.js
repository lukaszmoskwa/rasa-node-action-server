class RasaAction {
  next_action = "";
  sender_id = "";
  tracker = {
    sender_id: "",
    slots: { session_started_metadata: [] },
    latest_message: {
      intent: {},
      entities: [],
      text: "",
      message_id: "",
      metadata: {},
      intent_ranking: [],
      response_selector: {},
    },
    latest_event_time: 0,
    followup_action: null,
    paused: false,
    events: [],
    latest_input_channel: "",
    active_loop: {},
    latest_action: { action_name: "" },
    latest_action_name: "",
  };
  domain = {
    config: {},
    session_config: {},
    intents: [],
    entities: [],
    slots: {},
    responses: {},
    actions: [],
    forms: {},
    e2e_actions: [],
  };
  version = "";

  constructor({ domain, next_action, tracker, sender_id, version }) {
    this.domain = domain;
    this.next_action = next_action;
    this.tracker = tracker;
    this.sender_id = sender_id;
    this.domain = domain;
    this.version = version;
  }

  getSender() {
    return this.sender_id;
  }

  getDomain() {
    return this.domain;
  }

  getMetadata() {
    return this.tracker.latest_message.metadata;
  }
}

module.exports = {
  RasaAction,
};
