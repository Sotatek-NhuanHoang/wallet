import ActionType from './ActionType';
import { NavigationActions, StackActions } from 'react-navigation';

export function exportPrivateKey() {
  return {
    type: ActionType.navigate,
    navigationAction: StackActions.replace({
      routeName: 'ExportPrivateKey',
      params: {}
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
    type: ActionType.navigate,
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