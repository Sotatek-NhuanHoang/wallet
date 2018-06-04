import ActionType from '../actions/ActionType';

export default function headerReducer(state, action) {
  switch (action.type) {
    case ActionType.exportPrivateKey:
      return {}
    case ActionType.logOut:
      return {}
    default:
      return {};
  }
}