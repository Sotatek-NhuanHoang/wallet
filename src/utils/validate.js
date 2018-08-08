import validate from 'validate.js';

// Coin libs
import bitcore from 'bitcore-lib';
import Web3 from 'web3';

const { Address, PrivateKey } = bitcore;

import ERROR_TYPES from 'configs/errorTypes';



/**
 * =====================================================
 * Custom validation
 * =====================================================
 */

validate.validators.walletAddress = function(address, coin) {
    const errorType = ERROR_TYPES.INVALID_WALLET_ADDRESS;

    switch (coin.toLowerCase()) {
        case 'btc':
            if (!Address.isValid(address)) {
                return errorType;
            }
            break;

        case 'eth':
        case 'drc':
            if (!Web3.utils.isAddress(address)) {
                return errorType;
            }
            break;

        default:
            return errorType;
    }

    return null;
};

validate.validators.privateKey = function(privateKey, coin) {
    const errorType = ERROR_TYPES.INVALID_PRIVATE_KEY;

    switch (coin.toLowerCase()) {
        case 'btc':
            if (!PrivateKey.isValid(privateKey)) {
                return errorType;
            }
            break;

        case 'eth':
        case 'drc':
            if (!Web3.utils.isHex(privateKey)) {
                return errorType;
            }
            break;

        default:
            return errorType;
    }

    return null;
};



/**
 * =====================================================
 * Config error types
 * =====================================================
 */

validate.options = { format: 'detailed', fullMessages: false, };
validate.validators.presence.options = { message: ERROR_TYPES.FIELD_REQUIRED };
validate.validators.length.options = { message: ERROR_TYPES.INVALID_LENGTH };
validate.validators.format.options = { message: ERROR_TYPES.INVALID_FORMAT };



/**
 * =====================================================
 * Constraints
 * =====================================================
 */

export const privateKeyConstraint = {
    presence: { allowEmpty: false },
};

export const passwordConstraint = {
    presence: { allowEmpty: false },
    length: {
        minimum: 9,
        maximum: 50,
    },
    format: {
        pattern: "^([a-zA-Z0-9])+$",
        flag: 'g',
    },
};

export const quantityConstraint = {
    presence: { allowEmpty: false },
    format: {
        pattern: "^[0-9.]+$",
        flag: 'g',
    },
};

// Address validation
export const bitcoinAddressConstraint = {
    presence: { allowEmpty: false },
    walletAddress: 'btc',
};

export const ethAddressConstraint = {
    presence: { allowEmpty: false },
    walletAddress: 'eth',
};


// Private key validation
export const bitcoinPrivateKeyConstraint = {
    presence: { allowEmpty: false },
    privateKey: 'btc',
};

export const ethPrivateKeyConstraint = {
    presence: { allowEmpty: false },
    privateKey: 'eth',
};


export default validate;
