import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from '@styles/components/GlobalButton';



export class GlobalButton extends Component {

    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }


    onPress() {
        this.props.onPress();
    }


    render() {
        const { type, title } = this.props;
        let containerStyle = null;
        let buttonTextStyle = null;

        switch (type) {
            case 'primary':
                containerStyle = [style.container];
                buttonTextStyle = [style.buttonText];
                break;

            case 'basic':
                containerStyle = [style.container, style.container__basic];
                buttonTextStyle = [style.buttonText, style.buttonText__basic];
                break;

            default:
                containerStyle = [style.container];
                buttonTextStyle = [style.buttonText];
        }


        return (
            <TouchableWithoutFeedback onPress={ this.onPress }>
                <View style={ containerStyle }>
                    <Text style={ buttonTextStyle }>
                        { title }
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

GlobalButton.propTypes = {
    type: PropTypes.string, // Button type : primary, basic
    onPress: PropTypes.func,
    title: PropTypes.string, // Button text
};


export default GlobalButton;
