abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    return (value as string).indexOf("@") > -1;
  }
}

class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "string";
  }
}

class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === "number";
  }
}

class ValidationComposite extends ValidationComponent {
  private validations: ValidationComponent[] = [];

  constructor() {
    super();
  }

  validate(value: unknown): boolean {
    return this.validations.every(validation => validation.validate(value));
  }

  add(...validations: ValidationComponent[]) {
    this.validations.push(...validations);
  }
}

const validateEmail = new ValidateEmail();
const validateString = new ValidateString();
const validateNumber = new ValidateNumber();
const validationComposite = new ValidationComposite();

validationComposite.add(validateString, validateEmail);

console.log(validationComposite.validate("cesar@test.com")); // true

validationComposite.add(validateNumber);

console.log(validationComposite.validate("cesar@test.com")); // false
