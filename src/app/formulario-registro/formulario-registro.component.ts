import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit {
  title = "Formulário de Registro";

  formRegistro = new FormGroup({
    nome: new FormControl("", [Validators.required, Validators.minLength(3), Validators.pattern('^[A-Za-z]*$')]),
    cargaHoraria: new FormControl("", [Validators.required, Validators.min(30), Validators.max(100)]),
    escola: new FormControl('SENAI/SC - Serviço Nacional de Aprendizagem Industrial', [Validators.required, Validators.minLength(3), Validators.pattern('^[@!#$%-^&*A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ/s ]*$')]),
    email: new FormControl('', [Validators.required]),
    professor: new FormControl(""),
    materia: new FormControl('', [Validators.required]),

  });

  mostrar(){
    console.log(this.formRegistro);
  }

  resetarForm(){
    this.formRegistro.reset();
  }

 
  ngOnInit() {
  }
}

