import validate from 'validate.js';

// Coin libs
import bitcore from 'bitcore-lib';
import web3 from 'web3';

const { Address } = bitcore;

import ERROR_TYPES from 'configs/errorTypes';



/**
 * =====================================================
 * Custom validation
 * =====================================================
 */

validate.validators.walletAddress = function(address, coin) {
    const errorType = ERROR_TYPES.INVALID_WALLET_ADDRESS;

    switch (coin.toUpperCase()) {
        case 'BTC':
            if (!Address.isValid(address)) {
                return errorType;
            }
            break;

        case 'ETH':
        case 'DRC':
            if (!web3.utils.isAddress(address)) {
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

export const bitcoinAddressConstraint = {
    presence: { allowEmpty: false },
    walletAddress: 'BTC',
};

export const ethAddressConstraint = {
    presence: { allowEmpty: false },
    walletAddress: 'ETH',
};

export const quantityConstraint = {
    presence: { allowEmpty: false },
    format: {
        pattern: "^[0-9.]+$",
        flag: 'g',
    },
};


export default validate;
