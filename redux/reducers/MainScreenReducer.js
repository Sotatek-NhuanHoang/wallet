import ActionType from '../actions/ActionType';

export default function mainScreenReducer(state, action) {
  switch (action.type) {
    case ActionType.changeHeaderTitle:
      return {
        title: action.title
      }
    default:
      return {};
  }
}