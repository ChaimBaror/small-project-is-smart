import { Component, OnInit } from '@angular/core';

import { FormArray, FormControl } from '@angular/forms';
import { WizardService } from 'src/app/service/wizard.service';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {
  wizardService: WizardService;

  constructor(wizardService: WizardService) {
    this.wizardService = wizardService;
  }

  ngOnInit(): void {
  }

  get children(){
    const childArray = this.wizardService.getControl('childrenAge') as FormArray;
    return childArray.controls;
  }

  getValidationCssClass(controlName: string) {
    const control = this.wizardService.wizardForm.get(controlName);

    return {
      'is-valid': control?.touched && control.valid,
      'is-invalid': control?.touched && control.invalid,
    };
  }

  addChild() {
    const childArray = this.wizardService.getControl('childrenAge') as FormArray;
    childArray.push(new FormControl())
  }
}