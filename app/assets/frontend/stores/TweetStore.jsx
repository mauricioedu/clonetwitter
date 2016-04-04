import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"


AppDispatcher.register( action => {
  switch (action.ActionType) {
    case ActionTypes.RECEIVED_TWEETS:
      console.log(4,"TweetStore")
      break;

    default:
  }
});
