import { ValidatorFn, FormControl } from '@angular/forms';

export class WizardValidators {
    static unique(collection: any[]): ValidatorFn {
      return (control: FormControl) => {
        if (collection.indexOf(control.value) > -1) {
          return {
            unique: `${control.value} already exist`
          };
        }
        return null;
      };
    }
  }