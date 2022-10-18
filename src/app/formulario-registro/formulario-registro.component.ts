import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  title = "Formulário de Registro";

  formRegistro = new FormGroup({
    nome: new FormControl(),
    cargaHoraria: new FormControl(),
    escola: new FormControl(),
    email: new FormControl(),
    professor: new FormControl(),
    materia: new FormControl(),

  });

  constructor() { }

  ngOnInit() {
  }
}

