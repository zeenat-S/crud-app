import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PhoneValidatorDirective,
    multi: true
  }]
})
export class PhoneValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    if(control.value && (control.value.length<7 || control.value.length>10)) {
      return {'phoneNumberInvalid': true}
    }
    return null;
  }
}
