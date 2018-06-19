import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './src/routes';
import './src/i18n';
import store from './src/store/store';
import NavigationService from '@utils/NavigationService';


export default class App extends Component {

    setTopLevelNavigator(navigatorRef) {
        NavigationService.setTopLevelNavigator(navigatorRef);
    }


    render() {
        return (
            <Provider store={ store }>
                <Routes ref={ this.setTopLevelNavigator } />
            </Provider>
        );
    }
}
