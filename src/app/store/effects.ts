import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
// import { PostsService } from '../services/posts.service';
import { CartService } from '../services/cart/cart.service';

import * as CartActions from './actions';

@Injectable()
export class PostsEffects {
    getCart$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CartActions.getCart),
            mergeMap(() => {
                return this.cartService.getCart().pipe(
                    map((products) => CartActions.getCart({ products })),
                    catchError((error) =>
                        of(CartActions.getCartFailure({ error: error.message }))
                    )
                );
            })
        )
    );

    constructor(private actions$: Actions, private cartService: CartService) { }
}
