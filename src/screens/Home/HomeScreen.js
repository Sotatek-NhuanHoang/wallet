import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Loc } from 'react-native-redux-i18n';

export class HomeScreen extends Component {

    render() {
        return (
            <View>
                <Text style={{ color: 'red' }}>
                    <Loc locKey="greetings" name="i18n" ></Loc>
                </Text>
            </View>
        );
    }
}

export default HomeScreen;
