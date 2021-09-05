import { emailValidator, EmailValidatorAdapter } from "./email-validator-adapter";

const validator = new EmailValidatorAdapter();

if (validator.isEmail("email@gmail.com")) {
  console.log("É válido");
} else {
  console.log("É inválido");
}

if (emailValidator("invalid_email")) {
  console.log("É válido");
} else {
  console.log("É inválido");
}
