import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './src/routes';
import './src/i18n';
import store, { persistor } from './src/store/store';
import NavigationService from 'services/NavigationService';


export default class App extends Component {

    setTopLevelNavigator(navigatorRef) {
        NavigationService.setTopLevelNavigator(navigatorRef);
    }


    render() {
        return (
            <Provider store={ store }>
                <PersistGate loading={ null } persistor={ persistor }>
                    <Routes ref={ this.setTopLevelNavigator } />
                </PersistGate>
            </Provider>
        );
    }
}
