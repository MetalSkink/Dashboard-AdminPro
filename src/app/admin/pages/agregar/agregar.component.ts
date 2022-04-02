import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/ProductAPIResponse';
import { ProductService } from '../../../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  producto!: Product;

  constructor(private productService: ProductService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  miFormulario: FormGroup = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(3)]],
    category: ['',[Validators.required, Validators.minLength(3)]],
    price: ['',[Validators.required, Validators.min(0)]],
    imgUrl: ['',[Validators.required, Validators.minLength(3)]]
  });

  campoValido(campo: string){
    return this.miFormulario.controls[campo].valid &&
           this.miFormulario.controls[campo].touched;
  }

  campoNoValido(campo: string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched;
  }

  submit(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.producto = this.miFormulario.value;
    console.log(this.producto);
    this.productService.createProduct(this.producto).subscribe(
      ({name}) => Swal.fire(
        'Producto agregado con exito',
        'Se ha agregado el producto ' + name,
        'success'
      )
    );


  }




}
