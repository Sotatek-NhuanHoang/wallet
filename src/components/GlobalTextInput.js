import React, { Component } from 'react';
import { TextInput } from 'react-native';

import textInputStyle from '@styles/components/GlobalTextInput';


class GlobalTextInput extends Component {

    render() {
        const { style, type, multiline } = this.props;

        let finalStyle = null;

        switch (type) {
            case 'primary':
                finalStyle = [textInputStyle.textInput, style || {}];
                break;

            case 'basic':
                finalStyle = [textInputStyle.textInput, textInputStyle.textInput__basic, style || {}];
                break;

            default:
                finalStyle = [textInputStyle.textInput, style || {}];
        }

        if (multiline) {
            finalStyle = [ ...finalStyle, textInputStyle.textInput__multiline ];
        }

        return (
            <TextInput
                underlineColorAndroid={ 'rgba(0, 0, 0, 0)' }
                { ...this.props }
                style={ finalStyle }
            />
        );
    }
}


export default GlobalTextInput;
