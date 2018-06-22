import validate from 'validate.js';
import ERROR_TYPES from '@configs/errorTypes';


// Config error types
validate.options = { format: 'detailed', fullMessages: false, };
validate.validators.presence.options = { message: ERROR_TYPES.FIELD_REQUIRED };


/**
 * Constraints
 */

export const privateKeyConstraint = {
    presence: { allowEmpty: false },
};


export default validate;
