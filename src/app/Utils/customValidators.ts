import { FormGroup, FormControl } from '@angular/forms';

function customEmailValidator(ctrl: FormControl): { emailInvalid: boolean } | null {
  const { value } = ctrl;
  const EMAIL_REGEX = new RegExp('^[a-z0-9%_.+-]+@[a-z0-9.-]+\.[a-z]{2,4}$');
  return EMAIL_REGEX.test(value) ? null : { emailInvalid: true };
}

function passwordMatch(form: FormGroup): { notequal: boolean } | null {
  const password = form.get('password').value;
  const confirm = form.get('confirmPassword').value;
  return password === confirm ? null : { notequal: true };
}

export const customValidators = { passwordMatch, customEmailValidator };
