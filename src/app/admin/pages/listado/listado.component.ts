import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/ProductAPIResponse';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  currentPage = 1;
  productos: Product[] = [];

  constructor(private productService : ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.productos = data.products;
      }
    );
  }


  ngOnInit(): void {
  }

  borrar(product: Product){
    console.log('borrando producto: ' + product._id);
    Swal.fire({
      title: '¿Esta seguro?',
      text: '¿Esta seguro que quiere borrar el producto: '+product.name+"?",
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp =>{
      if (resp.value){
        // this._proyectService.deleteProyecto(proyecto.idProyecto).subscribe(()=>{
        //   this._proyectService.getProyectos().subscribe(data=>{
        //   this.proyectos= data;
        Swal.fire({
          title:'Proyecto borrado con exito',
          icon: 'success'
        });
          // })
          // });
      }
    });
  }

  modificar(product: Product){
    console.log('modificando producto: ' + product._id);
  }

}
