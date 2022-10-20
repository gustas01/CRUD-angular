import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  product: Product = {
    name: '',
    price: 0
  }
  createProduct(){
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Operação realizada com sucesso")
      this.router.navigate(['/products'])
    })
  }

  cancel(){
    this.router.navigate(['/products'])
  }

}
