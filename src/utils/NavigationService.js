import { NavigationActions } from 'react-navigation';

let _navigator;

export const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef;
};

export const navigate = (routeName, params) => {
    if (!routeName) {
        _navigator.dispatch(
            NavigationActions.back()
        );
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
