import _ from 'lodash';
import { COINS, COIN_TYPES } from '@constants';
import { getERCTokensSync } from './eth';

export function getAllCoinsSync () {
  return _.map(COINS, (coin) => Object.assign(coin, { type: COIN_TYPES.COIN }))
          .concat(_.map(getERCTokensSync(), (token) => Object.assign(token, { type: COIN_TYPES.ERC_TOKEN })));
};

export async function getPrice (symbol) {
  // Fake network status
  // TODO: implement me
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        symbol,
        price_usd: (Math.random() * 20000).toFixed(2),
        price_jpy: (Math.random() * 2000000).toFixed(2),
        percent_change_24h: (Math.random() * 100 - 50).toFixed(2)
      });
    }, Math.random() * 100);
  });
};

export async function getBalance (symbol, address) {
  // Fake network status
  // TODO: implement me
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve((Math.random() * 1000000).toFixed(8));
    }, Math.random() * 100);
  });
};

export async function sendCoin (symbol, keystore, passphrase, toAddress, amount, options) {
  // Fake network status
  // TODO: implement me
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.floor(Math.random() * 1000000) % 5 > 0 ? true : false;
      if (success) {
        resolve({txid: 'xxxx'});
      } else {
        reject(`Some random error happens.`);
      }
    }, Math.random() * 100);
  });
};
