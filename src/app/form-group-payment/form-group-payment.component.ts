import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group-payment',
  templateUrl: './form-group-payment.component.html',
  styleUrls: ['./form-group-payment.component.css']
})
export class FormGroupPaymentComponent implements OnInit {
  title = 'CheckoutForm';

  formPurchase = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    userName: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    adress2: new FormControl(),
    zip: new FormControl(),
    formPayment: new FormGroup({
      card: new FormControl(),
      nameCard: new FormControl(),
      cardNumber: new FormControl(),
      expiration: new FormControl(),
      cvv: new FormControl(),

    })
  });

  ngOnInit() {

    console.log(this.formPurchase);
  }

  mostraValor() {
    console.log(this.formPurchase);
  }

}





