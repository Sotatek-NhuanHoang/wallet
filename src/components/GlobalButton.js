import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';



class GlobalButton extends Component {

    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }


    onPress() {
        this.props.onPress();
    }


    render() {
        return (
            <TouchableWithoutFeedback onPress={onPress} style={{ backgroundColor: 'red' }}>
                { this.props.children }
            </TouchableWithoutFeedback>
        );
    }
}

export default GlobalButton;
