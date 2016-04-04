import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      ActionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    });
  }
}
