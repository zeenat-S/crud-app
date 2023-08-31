import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailValidatorDirective,
    multi: true
  }]
})
export class EmailValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    if(control.value && (!String(control.value).includes('@') && !String(control.value).includes('.com'))) {
      return {'emailInvalid': true}
    }
    return null
  }
 
}
