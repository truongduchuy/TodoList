const { createStore, combineReducers } = require('redux');

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const initialCakeState = { NumOfCakes: 10 };

const buyCake = () => ({ type: BUY_CAKE });

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      NumOfCakes: state.NumOfCakes - 1
    }
    default: return state;
  }
}

const initialIceCreamState = { NumOfIceCreams: 20 }

const buyIceCream = () => ({ type: BUY_ICECREAM });

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state,
      NumOfIceCreams: state.NumOfIceCreams - 1
    }

    default: return state;
  }
}

<<<<<<< HEAD
const rootState = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer });

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(rootState);
=======
const rootReducer = combineReducers({ cake: cakeReducer, iceCream: iceCreamReducer });

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.

const store = createStore(rootReducer);
>>>>>>> multiple reducers

console.log('Initial State', store.getState())

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()

// Initial State { NumOfCakes: 10 }
// Updated state { NumOfCakes: 9 }
// Updated state { NumOfCakes: 8 }
// Updated state { NumOfCakes: 7 }