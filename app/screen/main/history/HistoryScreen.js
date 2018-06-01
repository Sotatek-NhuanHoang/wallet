import React, { Component } from 'react';
import {
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback
} from 'react-native'
import I18n from '../../../res/i18n/i18n';
import BaseScreen from '../../BaseScreen';

const fakeData = [
  {
    timeStart: '04:16',
    timeEnd: '13:16',
    status: 'in',
    txid: '0xFc62AA3452de3...',
    amount: '0.001 ETH'
  },
  {
    timeStart: '04:16',
    timeEnd: '13:16',
    status: 'out',
    txid: '0xFc62AA3452de3...',
    amount: '123,1234 WWW'
  },
  {
    timeStart: '04:16',
    timeEnd: '13:16',
    status: 'in',
    txid: '0xFc62AA3452de3...',
    amount: '0.001 ETH'
  },
  {
    timeStart: '04:16',
    timeEnd: '13:16',
    status: 'in',
    txid: '0xFc62AA3452de3...',
    amount: '123,1234 WWW'
  },
  {
    timeStart: '04:16',
    timeEnd: '13:16',
    status: 'out',
    txid: '0xFc62AA3452de3...',
    amount: '10.23 ETH'
  },
  {
    timeStart: '04:16',
    timeEnd: '13:16',
    status: 'in',
    txid: '0xFc62AA3452de3...',
    amount: '123,1234 WWW'
  },
  {
    timeStart: '04:16',
    timeEnd: '13:16',
    status: 'in',
    txid: '0xFc62AA3452de3...',
    amount: '123,1234 WWW'
  },
  {
    timeStart: '04:16',
    timeEnd: '13:16',
    status: 'out',
    txid: '0xFc62AA3452de3...',
    amount: '123,1234 WWW'
  },
];

class HistoryScreen extends BaseScreen {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  _onPressItem(item) {

  }

  _renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={() => this._onPressItem(item)}>

        <View style={styles.timeGroup}>
          <Text style={{ color: 'white' }}>
            {item.timeStart}
          </Text>
          <Text style={{ color: 'white' }}>
            {item.timeEnd}
          </Text>
        </View>
        <View style={styles.statusGroup}>
          <View style={[styles.statusSubGroup, item.status === 'in' ? styles.inChange : styles.outChange]}>
            <Text style={{ color: 'white' }}>
              {item.status.toUpperCase()}
            </Text>
          </View>
        </View>
        <View style={{flex: 4, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#04A6E1', textDecorationLine: 'underline' }}>
            {item.txid}
          </Text>
        </View>

        <View style={{ flex: 4, alignItems: 'center', justifyContent: 'flex-end' }}>
          <Text style={{ paddingEnd: PixelRatio.getPixelSizeForLayoutSize(2), color: 'white', alignSelf: 'stretch', textAlign: 'right', }}>
            {item.amount}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View key="rowID" style={styles.separator} />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <StatusBar barStyle='light-content' />
        <View style={styles.screen}>
          <View style={styles.headerGroup}>
            <TouchableWithoutFeedback>
              <View style={{ flex: 1, alignItems: 'flex-start', }}>
                <Text style={{fontWeight:'bold', color: '#FFF', paddingStart: PixelRatio.getPixelSizeForLayoutSize(2), }}>
                  {I18n.t('history.time').toUpperCase()}
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <View style={{ flex: 1, alignItems: 'center' , }}>
                <Text
                  style={{fontWeight:'bold', color: '#FFF' }}>
                  {I18n.t('history.txid').toUpperCase()}
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={{fontWeight:'bold', color: '#FFF', paddingEnd: PixelRatio.getPixelSizeForLayoutSize(2), }}>
                  {I18n.t('history.amount').toUpperCase()}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <FlatList
            style={{ flex: 1 }}
            data={fakeData}
            extraData={this.state}
            renderItem={this._renderItem.bind(this)}
            ItemSeparatorComponent={this._renderSeparator}
          />
        </View>
      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#343434',
    flexDirection: 'column',
    height: '100%'
  },
  headerGroup: {
    flexDirection: 'row',
    height: PixelRatio.getPixelSizeForLayoutSize(25),
    backgroundColor: '#4A4A4A',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listItem: {
    flexDirection: 'row',
    height: PixelRatio.getPixelSizeForLayoutSize(20),
    alignItems: 'center'
  },
  timeGroup: {
    flex: 1.5,
    alignItems:'center',
  },
  statusGroup: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: PixelRatio.getPixelSizeForLayoutSize(5),
    paddingLeft: PixelRatio.getPixelSizeForLayoutSize(5),
  },
  statusSubGroup: {
    width: PixelRatio.getPixelSizeForLayoutSize(17),
    height: PixelRatio.getPixelSizeForLayoutSize(14),
    borderRadius: PixelRatio.getPixelSizeForLayoutSize(2),
    justifyContent: 'center',
    alignItems: 'center',

  },
  inChange: {
    backgroundColor: '#92D050',
  },
  outChange: {
    backgroundColor: '#FF3300',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#555555'
  },

});
export default HistoryScreen;