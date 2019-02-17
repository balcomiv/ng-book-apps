import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-demo-form-sku-with-builder',
  templateUrl: './demo-form-sku-with-builder.component.html',
  styleUrls: ['./demo-form-sku-with-builder.component.scss']
})
export class DemoFormSkuWithBuilderComponent implements OnInit {
  myForm: FormGroup;

  private sku: AbstractControl;

  constructor(
    private fb: FormBuilder
  ) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });

    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('you submitted value:', form);
    console.log('Form Controls: ', this.myForm.controls['sku']);
  }
}
