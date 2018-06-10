import ActionType from './ActionType';
import { NavigationActions } from 'react-navigation';

export function exportPrivateKey() {
  return {
    type: ActionType.exportPrivateKey,
    navigationAction: NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'ExportPrivateKey',
          params: {}
        })
      ]
    })
  }
}

export function logOut() {
  return {
    type: ActionType.logOut
  }
}

export function showHistory() {
  return {
    type: ActionType.showHistory,
    navigationAction: NavigationActions.navigate({
      routeName: 'History',
      params: {},
    })
  }
}

export function changeHeaderTitle(title) {
  return {
    type: ActionType.changeHeaderTitle,
    title
  }
}