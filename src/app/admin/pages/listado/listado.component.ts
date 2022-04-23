import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/ProductAPIResponse';
import Swal from 'sweetalert2';
import { TokenService } from '../../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent implements OnInit {
  totalPages: number = 1;
  currentPage = 1;
  productos: Product[] = [];
  isAdmin = false;
  isModerator: boolean = false;

  constructor(
    private router: Router,
    private productService: ProductService,
    private tokenService: TokenService
  ) {
    const roles = this.tokenService.getAuthorities() || [];
    roles.forEach((role) => {
      if (role === 'admin') {
        this.isAdmin = true;
      } else if (role === 'moderator') {
        this.isModerator = true;
      }
    });
    this.getProducts();
  }

  ngOnInit(): void {}

  getProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.totalPages = data.totalPages;
      this.productos = data.products;
    });
  }

  borrar(product: Product) {
    Swal.fire({
      title: '¿Esta seguro?',
      text: '¿Esta seguro que quiere borrar el producto: ' + product.name + '?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
    }).then((resp) => {
      if (resp.isConfirmed === true) {
        this.productService.deleteProduct(product._id!).subscribe(() => {
          this.getProducts();
          Swal.fire({
            title: 'Proyecto borrado con exito',
            icon: 'success',
          });
        });
      }
    });
  }

  modificar(product: Product) {
    this.router.navigate(['/dashboard/modificar', product._id]);
  }
}
