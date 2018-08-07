import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import GlobalLoc from 'components/GlobalLoc';
import GlobalHeaderTitle from 'components/GlobalHeaderTitle';
import GlobalContainer from 'components/GlobalContainer';
import GlobalHeaderBackButton from 'components/GlobalHeaderBackButton';
import GlobalCoinIcon from 'components/GlobalCoinIcon';
import GlobalButton from 'components/GlobalButton';
import { navigate } from 'services/NavigationService';
import { coinSelector } from 'store/wallet';

import style from 'styles/screens/WalletInitialSetting/WalletInitialSettingScreen/WalletInitialSettingScreen';


export class WalletInitialSettingScreen extends Component {

    static navigationOptions = {
        headerLeft: (
            <GlobalHeaderBackButton />
        ),
        headerTitle: (
            <GlobalHeaderTitle>
                <GlobalLoc locKey="WalletInitialSetting.WalletInitialSettingScreen.title" />
            </GlobalHeaderTitle>
        ),
    };


    goToCreateWalletScreen() {
        navigate('WalletInitialPrivateKeyScreen');
    }

    goToImportWalletScreen() {
        navigate('WalletInitialImportScreen');
    }

    render() {
        const { selectedCoin } = this.props;

        return (
            <GlobalContainer>
                {/* Icon and coin name */}
                <View style={ style.coinContainer }>
                    <GlobalCoinIcon coin={ selectedCoin.symbol } size="large" />
                    <Text style={ style.coinName }>{ selectedCoin.name }</Text>
                </View>

                {/* Actions */}
                <View style={ style.actionContainer }>
                    <GlobalButton style={ style.marginBottom } onPress={ this.goToCreateWalletScreen }>
                        <GlobalLoc locKey="WalletInitialSetting.WalletInitialSettingScreen.createWallet_btn" />
                    </GlobalButton>

                    <GlobalButton onPress={ this.goToImportWalletScreen }>
                        <GlobalLoc locKey="WalletInitialSetting.WalletInitialSettingScreen.importWallet_btn" />
                    </GlobalButton>
                </View>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ global, wallet }) => ({
    selectedCoin: coinSelector(wallet, { coin: global.selectedCoin }),
});

export default connect(mapStateToProps)(WalletInitialSettingScreen);
