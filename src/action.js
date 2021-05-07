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

  /**
   * Constructor of the Rasa Action class
   * @param {object} param0 Rasa action request
   */
  constructor({ domain, next_action, tracker, sender_id, version }) {
    this.domain = domain;
    this.next_action = next_action;
    this.tracker = tracker;
    this.sender_id = sender_id;
    this.domain = domain;
    this.version = version;
  }

  /**
   * Return the slots contained in the Action request
   */
  getSlots() {
    return this.tracker.slots;
  }

  /**
   * Return the sender contained in the Action request
   */
  getSender() {
    return this.sender_id;
  }

  /**
   * Return the domain contained in the Action request
   */
  getDomain() {
    return this.domain;
  }

  /**
   * Return the metadata contained in the Action request
   */
  getMetadata() {
    return this.tracker.latest_message.metadata;
  }
}

module.exports = {
  RasaAction,
};
