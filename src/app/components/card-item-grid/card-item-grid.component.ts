import { Component, Input } from '@angular/core';
import { IProduct } from 'src/shared/interfaces';

@Component({
  selector: 'app-card-item-grid',
  templateUrl: './card-item-grid.component.html',
  styleUrls: ['./card-item-grid.component.scss']
})
export class CardItemGridComponent {
  @Input() product: IProduct;

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
