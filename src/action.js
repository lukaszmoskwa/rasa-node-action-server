class RasaAction {
  next_action = "";
  sender_id = "";
  tracker = {
    sender_id: "test",
    slots: { session_started_metadata: [Object] },
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
    config: { store_entities_as_slots: true },
    session_config: {},
    intents: [],
    entities: [],
    slots: {},
    responses: {
      utter_micol: [Array],
      utter_greet: [Array],
      utter_cheer_up: [Array],
      utter_did_that_help: [Array],
      utter_happy: [Array],
      utter_goodbye: [Array],
      utter_iamabot: [Array],
    },
    actions: [""],
    forms: {},
    e2e_actions: [],
  };
  version = "2.5.1";

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
