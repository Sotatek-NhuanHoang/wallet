import React, { Component } from 'react';
import { TextInput } from 'react-native';

import textInputStyle from '@styles/components/GlobalTextInput';


class GlobalTextInput extends Component {

    constructor(props) {
        super(props);
        this.onGlobalTextInputCreated = this.onGlobalTextInputCreated.bind(this);
    }


    // return a reference of this component
    onGlobalTextInputCreated(textInput) {
        if (this.props.onGlobalTextInputCreated) {
            this.props.onGlobalTextInputCreated(textInput);
        }
    } 


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
                ref={ this.onGlobalTextInputCreated }
            />
        );
    }
}


export default GlobalTextInput;
