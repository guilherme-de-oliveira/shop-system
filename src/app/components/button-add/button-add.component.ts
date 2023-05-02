import { Component, Input } from '@angular/core';
import { IProduct } from 'src/shared/interfaces';
import { Add, Opa,  } from 'src/app/actions/cart.action';
import { Store, select } from '@ngrx/store';
import { CartModel } from 'src/app/models/cart.interface';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.scss'],
  providers: [MessageService]
})
export class ButtonAddComponent {
  @Input() product: IProduct;

  constructor(
    private store: Store<CartModel>,
    private messageService: MessageService
  ){}

  addToCart(product) {
    console.log('opa ', product)
    this.store.dispatch(Opa({product: product}));
    // this.store.dispatch(new Increment());
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Item add' });
  }
}
