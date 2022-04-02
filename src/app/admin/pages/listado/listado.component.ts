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

  totalPages: number = 1;
  currentPage = 1;
  productos: Product[] = [];

  constructor(private productService : ProductService) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.totalPages = data.totalPages;
        this.productos = data.products;
      }
    );
  }


  ngOnInit(): void {
  }

  borrar(product: Product){
    Swal.fire({
      title: '¿Esta seguro?',
      text: '¿Esta seguro que quiere borrar el producto: '+product.name+"?",
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.isConfirmed === true) {
        this.productService.deleteProduct(product._id).subscribe(() =>{
          this.productService.getProducts().subscribe((data) => {
            this.totalPages = data.totalPages;
            this.productos = data.products;
            Swal.fire({
                title:'Proyecto borrado con exito',
                icon: 'success'
              })
          });
        });
      }
    });
  }

  modificar(product: Product){
    console.log('modificando producto: ' + product._id);
  }

}
// this.productService.deleteProduct(product._id).subscribe(() =>{
//   this.productService.getProducts().subscribe(data => {
//     this.productos = data.products;
//     Swal.fire({
//       title:'Proyecto borrado con exito',
//       icon: 'success'
//     })
//   });
// })
