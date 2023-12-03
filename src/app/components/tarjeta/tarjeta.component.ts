import { Component, Input } from '@angular/core';
import { Profesional } from 'src/app/models/profesional';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {

    @Input() profPadre: Profesional
}
