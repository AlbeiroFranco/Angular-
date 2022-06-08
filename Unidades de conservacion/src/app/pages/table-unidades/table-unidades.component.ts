import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Unidades } from '../../interfaces/datos.interface';

@Component({
  selector: 'app-table-unidades',
  templateUrl: './table-unidades.component.html',
  styleUrls: ['./table-unidades.component.css']
})
export class TableUnidadesComponent implements OnInit {

  constructor( private data: DataService,
               private fb: FormBuilder) {}

  datosTabla: Unidades[] = [];
  id: number | undefined;
  edit: boolean = false;
  mostrar: boolean = false;

  unidadesForm: FormGroup = this.fb.group({
    id: [''],
    codigo: ['',Validators.required],
    descripcion: ['',Validators.required],
    nivel: ['',Validators.required],
    folios: ['',Validators.required],
  })

  ngOnInit(): void {
    
    this.cargarDatos();
    
  }

  cargarDatos(){
    this.data.getDatos()
      .subscribe((res: any) => {
        this.datosTabla = res;
        console.log(this.datosTabla);
      })
  }

  editar(data: any, id : any){
    console.log(data);
    console.log(id);

    data.edit = true;

    this.unidadesForm.setValue({
      id: data.id,
      codigo: data.codigo,
      descripcion: data.descripcion,
      nivel: data.nivel,
      folios: data.folios,
    })
    
  }

  guardar(data: any){
   
    const unidad: Unidades = {
      id: this.unidadesForm.get('id')?.value,
      codigo: this.unidadesForm.get('codigo')?.value,
      descripcion: this.unidadesForm.get('descripcion')?.value,
      nivel: this.unidadesForm.get('nivel')?.value,
      folios: this.unidadesForm.get('folios')?.value,
    }

    this.data.putDatos(unidad)
      .subscribe( res => {
        this.cargarDatos();
        this.unidadesForm.reset();
      })

    data.edit = false;

  }

  eliminar(data: any, id: Unidades){
    this.data.deleteDatos(id)
      .subscribe(res => {
        this.cargarDatos()
      })
  }

  guardarNuevo(){

    const nuevaUnidad: Unidades = {
      id: this.unidadesForm.get('id')?.value,
      codigo: this.unidadesForm.get('codigo')?.value,
      descripcion: this.unidadesForm.get('descripcion')?.value,
      nivel: this.unidadesForm.get('nivel')?.value,
      folios: this.unidadesForm.get('folios')?.value,
    }

    this.data.postDatos(nuevaUnidad)
      .subscribe( res => {
        this.cargarDatos();
        this.unidadesForm.reset();
      })

    this.mostrar = false;
  
  }

  close(data: any){
    data.edit = false;
  }

  nuevo(){
    this.mostrar = true;
  }

  cancel(){
    this.mostrar = false;
  }


}
