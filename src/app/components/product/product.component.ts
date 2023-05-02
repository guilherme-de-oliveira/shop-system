import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product/product-service.service';
import { IProduct } from 'src/shared/interfaces'
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],

})
export class ProductComponent {
  layout: string = 'list';
  products: IProduct[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey = { label: 'Price High to Low', value: '!price' }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().then((data) => (this.products = data.slice(0, 12)));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }
}
