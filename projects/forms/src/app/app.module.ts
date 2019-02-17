import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppDemoFormSkuComponent } from './components/demo-form-sku/demo-form-sku.component';
import { DemoFormSkuWithBuilderComponent } from './components/demo-form-sku-with-builder/demo-form-sku-with-builder.component';
import { DemoFormWithCustomValidationComponent } from './components/demo-form-with-custom-validation/demo-form-with-custom-validation.component';
import { DemoFormWithEventsComponent } from './components/demo-form-with-events/demo-form-with-events.component';

@NgModule({
  declarations: [
    AppComponent,
    AppDemoFormSkuComponent,
    DemoFormSkuWithBuilderComponent,
    DemoFormWithCustomValidationComponent,
    DemoFormWithEventsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
