import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExercicioFormBuilderComponent } from './exercicio-form-builder/exercicio-form-builder.component';
import { FormGroupPaymentComponent } from './form-group-payment/form-group-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercicioFormBuilderComponent,
    FormGroupPaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
