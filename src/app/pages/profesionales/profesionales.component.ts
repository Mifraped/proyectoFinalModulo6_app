import { Component } from '@angular/core';
import { Profesional } from 'src/app/models/profesional';
import { Respuesta } from 'src/app/models/respuesta';
import { ProfesionalServiceService } from 'src/app/shared/profesional-service.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent {

  constructor(public profesionalService: ProfesionalServiceService){

  }

  public muestraProf(nombre: HTMLInputElement, apellido: HTMLInputElement){
    if(nombre.value && apellido.value){
        this.profesionalService.getOne(nombre.value, apellido.value).subscribe((resp: Respuesta) => {
        this.profesionalService.profesionales = resp.data
        nombre.value = ""
        apellido.value = ""
      })
    }else if(nombre.value == "" && apellido.value == ""){
        this.profesionalService.getAll().subscribe((resp: Respuesta) => {
        this.profesionalService.profesionales = resp.data
      })
    }
  }

  public anyade(nombre: HTMLInputElement, apellido: HTMLInputElement, edad: HTMLInputElement, retirado: HTMLSelectElement, nacionalidad: HTMLInputElement, oscars: HTMLInputElement, profesion: HTMLInputElement){

    if(nombre.value && apellido.value && edad.value && retirado.value && nacionalidad.value && oscars.value && profesion.value){

      let newProf = new Profesional(nombre.value, apellido.value, Number(edad.value), retirado.value==="true"?true:false, nacionalidad.value, Number(oscars.value), profesion.value)

      this.profesionalService.postProf(newProf).subscribe((resp: Respuesta) => {
        this.muestraProf(nombre, apellido)
      })
      nombre.value = ""
      apellido.value = ""
      edad.value = ""
      retirado.value = ""
      nacionalidad.value = ""
      oscars.value = ""
      profesion.value = ""
    }else alert("Faltan campos por rellenar")
  }

  public edita(nombre: HTMLInputElement, apellido: HTMLInputElement, edad: HTMLInputElement, retirado: HTMLSelectElement, nacionalidad: HTMLInputElement, oscars: HTMLInputElement, profesion: HTMLInputElement){

    if(nombre.value && apellido.value && edad.value && retirado.value && nacionalidad.value && oscars.value && profesion.value){

      let newProf = new Profesional(nombre.value, apellido.value, Number(edad.value), retirado.value==="true"?true:false, nacionalidad.value, Number(oscars.value), profesion.value)

      this.profesionalService.putProf(newProf).subscribe((resp: Respuesta) => {
        this.muestraProf(nombre, apellido)
      })
      nombre.value = ""
      apellido.value = ""
      edad.value = ""
      retirado.value = ""
      nacionalidad.value = ""
      oscars.value = ""
      profesion.value = ""
    }else alert("Faltan campos por rellenar")
  }

  public elimina(nombre: HTMLInputElement, apellido: HTMLInputElement){
    this.profesionalService.deleteProf(nombre.value, apellido.value).subscribe((resp: Respuesta) => {
      this.muestraProf(nombre, apellido)
    })
    nombre.value = ""
    apellido.value = ""    
  }
}
