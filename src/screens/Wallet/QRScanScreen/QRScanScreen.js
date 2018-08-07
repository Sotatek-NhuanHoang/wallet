import React, { Component } from 'react';
import { Text, AsyncStorage, Alert, View, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import GlobalHeaderBackButton from 'components/GlobalHeaderBackButton';
import { navigate } from 'services/NavigationService';
import { WALLET_WITHDRAW_CHANGE_ADDRESS} from 'store/wallet';
import validate, { bitcoinAddressConstraint, ethAddressConstraint, quantityConstraint } from 'utils/validate';

import style from 'styles/screens/Wallet/QRScanScreen/QRScanScreen';

import { RNCamera } from 'react-native-camera';


export class QRScanScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="Wallet.QRScanScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    isValidAddress = false;
    isShowingError = false;

    state = {isCameraEnabled:true}

    constructor(props) {
        super(props);
        this.top = new Animated.Value(0);
        this.barcodeReceived = this.barcodeReceived.bind(this);
    }

    componentDidMount() {
        this.startAnimation();
    }

    startAnimation() {
        this.top.setValue(0)
        Animated.timing(
            this.top,
            {
              toValue: 1,
              duration: 4000,
              easing: Easing.linear
            }
        ).start(() => this.startAnimation())
    }

    
    async barcodeReceived(event){
        const { selectedCoin } = this.props;

        try{
            if (this.isValidAddress) {
                return;
            }

            const address = event.data.replace(/\s/g, '');
            let addressValidationResult = null;

            switch (selectedCoin.symbol.toUpperCase()) {
                case 'BTC':
                    addressValidationResult = validate({ address }, { address: bitcoinAddressConstraint, });
                    break;
        
                case 'ETH':
                case 'DRC':
                    addressValidationResult = validate({ address }, { address: ethAddressConstraint, });
                    break;
            }
        
            if (addressValidationResult) {
                const error = addressValidationResult[0].error;
                throw new Error(error);
                return;
            }

            this.isValidAddress = true;

            await this.props.changeAddress(address);
            await this.setState({ isCameraEnabled: false });
            this.props.navigation.navigate('WithdrawScreen'); 
        } catch (error) {
            if (this.isShowingError) {
                return;
            }

            this.isShowingError = true;
            Alert.alert('Err',error.message);
            
            setTimeout(() => {
                this.isShowingError = false;
            }, 3000);
        }
    }

    render() {
        if (!this.state.isCameraEnabled) {
            return (<View/>)
        }

        const top = this.top.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 200, 0]
        });

        return (
            <View style={style.container}>
                <RNCamera
                    style = {style.camera}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    onBarCodeRead={ this.barcodeReceived }
                />

                <View style={style.scanContainer}>
                    <View style={style.blurContent} />
                    <View style={style.scanContent}>
                        <View style={style.blurContent} />
                        <View style={style.squareContent}>
                            <Animated.View style={{ height: 2, width: 200, position: 'absolute', backgroundColor: 'yellow', top: top, }} />
                        </View>
                        <View style={style.blurContent} />
                    </View>
                    <View style={style.blurContent} />
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ global}) => ({
    selectedCoin: global.selectedCoin,
});

const mapDispathToProps = (dispatch) => ({
    changeAddress: (address) => {
        dispatch(WALLET_WITHDRAW_CHANGE_ADDRESS(address));
    }
});

export default connect(mapStateToProps, mapDispathToProps)(QRScanScreen);
