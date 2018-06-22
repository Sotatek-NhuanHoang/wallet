import validate from 'validate.js';
import ERROR_TYPES from '@configs/errorTypes';


// Config error types
validate.options = { format: 'detailed', fullMessages: false, };
validate.validators.presence.options = { message: ERROR_TYPES.FIELD_REQUIRED };
validate.validators.length.options = { message: ERROR_TYPES.INVALID_LENGTH };
validate.validators.format.options = { message: ERROR_TYPES.INVALID_FORMAT };


/**
 * Constraints
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


export default validate;
