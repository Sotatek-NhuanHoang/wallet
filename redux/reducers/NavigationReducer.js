import ActionType from '../actions/ActionType';

export default function reduce(state, action) {
  switch (action.type) {
    case ActionType.navigate:
      return {
        navigationAction: action.navigationAction
      }
    case ActionType.logOut:
      return {
        logOut: true
      }
    case ActionType.changeHeaderTitle:
      return {
        headerTitle: action.title
      }
    default:
      return {};
  }
}