import { fieldContraints } from "./constraints";
import validate from "validate.js";

/**
 * Wrapper function for validate.js
 *
 * @param {string} field
 * @param {string} value
 * @returns {string} Validation Error || null
 */
const validateInput = (field, value) => {
  console.log(field, value);
  let fieldObject = { [field]: value };

  let result = validate(fieldObject, fieldContraints);

  /* eslint-disable no-undefined */
  if (result && result[field] !== undefined) {
    return result[field][0];
  }

  return null;
};

export default validateInput;
