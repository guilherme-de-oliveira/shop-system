import { Component, Input } from '@angular/core';
import { AppStateInterface, IProduct } from 'src/shared/interfaces';
import { Store, select } from '@ngrx/store';
import { MessageService } from 'primeng/api';
import * as CartActions from '../../store/product.actions';
import { Observable } from 'rxjs';
import { cartSelector } from 'src/app/store/product.selectors';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss'],
  providers: [MessageService]
})
export class ButtonAddComponent {
  @Input() product: IProduct;
  cart$: Observable<IProduct[]>;
  
  constructor(
    private store: Store<AppStateInterface>,
    private messageService: MessageService
  ){
    this.cart$ = this.store.pipe(select(cartSelector));
  }

  addToCart(product) {
    this.store.dispatch(CartActions.postCart({products: product}))
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item added' });
  }
}
