import ActionType from './ActionType';

export function exportPrivateKey() {
  return {
    type: ActionType.exportPrivateKey
  }
}

export function logOut() {
  return {
    type: ActionType.logOut
  }
}

export function showHistory() {
  return {
    type: ActionType.showHistory
  }
}

export function changeHeaderTitle(title) {
  return {
    type: ActionType.changeHeaderTitle,
    title
  }
}