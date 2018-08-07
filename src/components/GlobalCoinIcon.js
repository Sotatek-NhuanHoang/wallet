import React, { Component } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

import Images from '@assets/images';

import style from 'styles/components/GlobalCoinIcon';



export class GlobalCoinIcon extends Component {

    render() {
        const coinImageSource = Images.coins[this.props.coin];
        const { size } = this.props;

        let iconStyle = null;

        switch (size) {
            case 'extraSmall':
                iconStyle = [style.iconStyle__extraSmall];
                break

            case 'small':
                iconStyle = [style.iconStyle__small];
                break;

            case 'large':
                iconStyle = [style.iconStyle__large];
                break;

            default:
                iconStyle = [style.iconStyle];
        }


        return (
            <Image
                style={ iconStyle }
                source={ coinImageSource }
                { ...this.props }
            />
        );
    }
}

GlobalCoinIcon.propTypes = {
    coin: PropTypes.string,
    size: PropTypes.string,
};


export default GlobalCoinIcon;
