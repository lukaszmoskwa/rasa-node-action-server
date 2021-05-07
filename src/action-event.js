class RasaActionEvent {
  /**
   * https://rasa.com/docs/action-server/events#slot
   */
  static slot(name, value) {
    return {
      event: "slot",
      name,
      value,
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#reset_slots
   */
  static reset_slots() {
    return {
      event: "reset_slots",
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#bot
   */
  static bot(text, data = {}) {
    return {
      event: "bot",
      text,
      data,
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#reminder
   */
  static reminder(intent, entities = [], date_time, name, kill_on_user_msg) {
    return {
      event: "reminder",
      intent,
      entities,
      date_time,
      name,
      kill_on_user_msg,
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#cancel_reminder
   */
  static cancel_reminder(intent, entities = [], date_time, name) {
    return {
      event: "cancel_reminder",
      intent,
      entities,
      date_time,
      name,
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#pause
   */
  static pause() {
    return {
      event: "pause",
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#resume
   */
  static resume() {
    return {
      event: "resume",
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#followup
   */
  static followup(actionName) {
    return {
      event: "followup",
      name: actionName,
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#rewind
   */
  static rewind() {
    return {
      event: "rewind",
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#undo
   */
  static undo() {
    return {
      event: "undo",
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#restart
   */
  static restart() {
    return {
      event: "restart",
    };
  }

  /**
   * https://rasa.com/docs/action-server/events#session_started
   */
  static session_started() {
    return {
      event: "session_started",
    };
  }
}

module.exports = {
  RasaActionEvent,
};
