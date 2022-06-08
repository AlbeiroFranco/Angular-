import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaService } from '../../services/tarjeta.service';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent implements OnInit {

  listaTarjetas: any[] = [];
  accion = 'Agegar';
  id: number | undefined;
  
  constructor( private fb: FormBuilder, 
               private toastr: ToastrService,
               private _dataService: TarjetaService) { }

  myForm: FormGroup = this.fb.group({
    titular: ['', Validators.required],
    numeroTarjeta: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
    fechaExpiracion: ['',[Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
    cvv: ['',[Validators.required, Validators.maxLength(3), Validators.minLength(3)]]
  })

  ngOnInit(): void {

    this.obtenerTarjetas()
  }

  obtenerTarjetas(){
    this._dataService.getList()
      .subscribe(res =>{ 
        this.listaTarjetas = res;
        console.log(res)})
  }

  guardarTarjeta(){

    const tarjeta: any = {
      titular: this.myForm.get('titular')?.value,
      numeroTarjeta: this.myForm.get('numeroTarjeta')?.value,
      fechaExpiracion: this.myForm.get('fechaExpiracion')?.value,
      cvv: this.myForm.get('cvv')?.value
    }

    if(this.id == undefined){
      //Agregamos nueva tarjeta
      this._dataService.saveTarjeta(tarjeta)
        .subscribe( res => {
          this.obtenerTarjetas();
          this.toastr.success('Success', 'se ha creado exitosamente');
          this.myForm.reset();
      })
    }else{
      //editamos tarjetas
      tarjeta.id = this.id
      this._dataService.updateTarjeta(this.id, tarjeta)
        .subscribe(res => {
          this.myForm.reset();
          this.accion = 'Agregar';
          this.id = undefined;
          this.toastr.info('OK','La tarjeta a sido Editada con exito');
          this.obtenerTarjetas();
        })

    }


    console.log(tarjeta);

  }

  editar(tarjeta: any){

    this.accion ='Editar'
    console.log(tarjeta);
    this.id = tarjeta.id;

    this.myForm.setValue({
      titular: tarjeta.titular,
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv

    })
    
  }

  eliminar(id: number){
    console.log(id + 'hola')
    /* this.listaTarjetas.splice(index, 1); */
    this._dataService.deleteTarjeta(id)
      .subscribe(res => {
        this.obtenerTarjetas();
        this.toastr.success('Success', 'Se elimino correctamente')
      })
    
  }


}
