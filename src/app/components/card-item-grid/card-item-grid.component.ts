import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/shared/interfaces';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-card-item-grid',
  templateUrl: './card-item-grid.component.html',
  styleUrls: ['./card-item-grid.component.scss']
})
export class CardItemGridComponent{
  @Input() product: IProduct;

  constructor(private service: CartService){}

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
