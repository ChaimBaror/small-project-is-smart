import { Directive, Input } from '@angular/core';

import { Validator, NG_VALIDATORS, ValidationErrors, AbstractControl } from '@angular/forms';
import { WizardValidators } from '../service/WizardValidators';


  @Directive({
    selector: '[unique]',
    providers:[{
      provide: NG_VALIDATORS,
      useExisting: UniqueDirective,
      multi: true
    }]
  })
  export class UniqueDirective implements Validator {
    @Input('unique') collection : any[];
  
    validate(control: AbstractControl): ValidationErrors | null {
      return WizardValidators.unique(this.collection)(control);
    }
  }
