import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CheckoutForm';
  // purchase!: FormGroup;

  formPurchase = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    userName: new FormControl(),
    email: new FormControl(),
    adress: new FormControl(),
    adress2: new FormControl(),
    zip: new FormControl(),
    formPayment: new FormGroup({
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


