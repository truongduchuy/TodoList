const { createStore } = require('redux');

const BUY_CAKE = 'BUY_CAKE';

const initialCakeState = { NumOfCakes: 10 }

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


// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(cakeReducer);

console.log('Initial State', store.getState())

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()
store.dispatch(buyCake())

// Initial State { NumOfCakes: 10 }
// Updated state { NumOfCakes: 9 }
// Updated state { NumOfCakes: 8 }
// Updated state { NumOfCakes: 7 }