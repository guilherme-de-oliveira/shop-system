import { Action, createReducer, on } from '@ngrx/store';
import { ActionTypes, Opa } from "../actions/cart.action";
import { ActionModel } from "../models/action.model";
import { CartModel } from "../models/cart.interface";
import { IProduct } from "src/shared/interfaces";
// import { ProductModel } from "../models/product.model";

// export const cart = new CartModel();
// export const totalItems = 0;
export const initialState: Array<IProduct> = []

export const cartReducer = createReducer(
    initialState,
    on(Opa, (state, { product }) =>  {
        
        console.log(product)
        state.push(product.payload)
        console.log(state)
        return state
        // return [...state, product];
    }),
    // on(ActionTypes.awayScore, state => ({ ...state, away: state.away + 1 })),
    // on(ActionTypes.resetScore, state => ({ home: 0, away: 0 })),
    // on(ActionTypes.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
  );
// export function cartReducer(state = cart, action:ActionModel) {
    
//     switch (action.type) {
//         case ActionTypes.Opa.type:
//             {
//                 console.log('entrei', action)
//                 return state;
//             }
//         case ActionTypes.Add:
//             {
//                 console.log(state)
//                 state.products.push(action.payload);
//                 console.log(action.payload)
//                 state.total = calcTotalItems(state.products);

//                 console.log('ADD: ', state);
//                 return state;
//             }
//         case ActionTypes.Remove:
//             {
//                 const index = state.products.indexOf(action.payload);
//                 state.products.splice(index, 1);
//                 state.total = calcTotalItems(state.products);

//                 console.log('REMOVE: ', state);
//                 return state;
//             }
//         case ActionTypes.Clear:
//             {
//                 state = new CartModel();
//                 state.total = calcTotalItems(state.products);

//                 console.log('CLEAR: ', state);
//                 return state;
//             }
        
//         default:
//             return state;
//     }
// }

function calcTotalItems(products: IProduct[]): number {
    let total = 0;
    products.forEach((product) => {
        this.total += product.price;
    })

    return this.totalItems;
}