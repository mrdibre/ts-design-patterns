import isEmail from "validator/lib/isEmail";

import { EmailValidator, EmailValidatorFn } from "./interfaces";

class EmailValidatorAdapter implements EmailValidator {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}

const emailValidator: EmailValidatorFn = (value) => isEmail(value);

export { EmailValidatorAdapter, emailValidator };
