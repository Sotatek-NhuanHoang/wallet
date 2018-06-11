import ActionType from './ActionType';
import { NavigationActions } from 'react-navigation';

export function exportPrivateKey() {
  return {
    type: ActionType.navigate,
    navigationAction: {
      action: NavigationActions.navigate({
        routeName: 'ExportPrivateKey',
        params: {}
      }),
      routeName: 'ExportPrivateKey',
    }
  }
}

export function logOut() {
  return {
    type: ActionType.logOut
  }
}

export function showHistory() {
  return {
    type: ActionType.navigate,
    navigationAction: {
      action:  NavigationActions.navigate({
        routeName: 'History',
        params: {},
      }),
      routeName: 'History'
    }
  }
}

export function changeHeaderTitle(title) {
  return {
    type: ActionType.changeHeaderTitle,
    title
  }
}