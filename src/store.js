import { createStore} from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/reducer";

// Examples with add ons
// import { sayHiOnDispatch } from './addons/enhancers';
// import { includeMeaningOfLife } from './addons/enhancers';

// import { print1, print2, print3 } from './addons/middleware;'




// Not neccessary start
//  You could use this to add initial data when the store is created
// let preloadedState;
// const persistedTodosString = localStorage.getItem('todos')
// if (persistedTodosString) {
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }
// Not necessary end


// const composedEnhancer = composeWithDevTools(sayHiOnDispatch, includeMeaningOfLife)

// Create a middleware enhancer as example
// const middlewareEnhancer = applyMiddleware(print1, print2, print3);

const store = createStore(rootReducer);

export default store