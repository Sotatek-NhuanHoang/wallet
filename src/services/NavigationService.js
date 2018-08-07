import { NavigationActions, StackActions } from 'react-navigation';

let _navigator;

export const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef;
};

export const navigate = (routeName, params, willReset) => {
    if (!routeName) {
        _navigator.dispatch(
            NavigationActions.back()
        );
        return;
    }

    if (willReset) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName, params, })],
        });
        _navigator.dispatch(resetAction);
        return;
    }

    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        })
    );
};


export default {
    navigate,
    setTopLevelNavigator,
};
