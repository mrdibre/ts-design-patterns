export interface EmailValidator {
  isEmail: EmailValidatorFn;
}

export type EmailValidatorFn = (value: string) => boolean;
