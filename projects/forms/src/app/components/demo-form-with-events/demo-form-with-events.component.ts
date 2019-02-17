import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-demo-form-with-events',
  templateUrl: './demo-form-with-events.component.html',
  styleUrls: ['./demo-form-with-events.component.scss']
})
export class DemoFormWithEventsComponent implements OnInit {
  myForm: FormGroup;

  private sku: AbstractControl;

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku changed to:', value);
    });

    this.myForm.valueChanges.subscribe((form: any) => {
      console.log('form changed to :', form);

    });
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('you submitted value:', form);
    console.log('Form Controls: ', this.myForm.controls['sku']);
  }
}
