import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/services/product-service.service';
import { IProduct } from 'src/shared/interfaces';
// import { DataViewLayoutOptions } from 'primeng/dataview';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  
})
export class ProductComponent {
  layout: string = 'list';

  products: IProduct[];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 12)));
  }

  getSeverity(product) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };

}
