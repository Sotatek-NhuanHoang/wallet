import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import style from 'styles/components/GlobalButton';



export class GlobalButton extends Component {

    render() {
        const { type, title, children } = this.props;

        let containerStyle = null;
        let buttonTextStyle = null;

        switch (type) {
            case 'primary':
                containerStyle = [style.container];
                buttonTextStyle = [style.buttonText];
                break;

            case 'secondary':
                containerStyle = [style.container, style.container__secondary];
                buttonTextStyle = [style.buttonText, style.buttonText__secondary];
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
            <TouchableWithoutFeedback { ...this.props }>
                <View style={ [containerStyle, this.props.style || {}] }>
                    <Text style={ buttonTextStyle }>
                        { title || children }
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
