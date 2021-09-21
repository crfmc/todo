import React from 'react';
import ReactDOM from 'react-dom';

// Importing Redux library and store
import { Provider } from 'react-redux';
import store from './store'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


console.table(store.getState());

console.log('Dispatching action')
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' })
console.log('Dispatch complete')

const unsubscribe = store.subscribe(() =>
{
  console.log('State after dispatch: ')
  console.table(store.getState())
}
);

// Add 3 todos
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about reducers' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });

// Toggle todo 0 and 1
store.dispatch({ type: 'todos/todoToggled', payload: 0 });
store.dispatch({ type: 'todos/todoToggled', payload: 1 });

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' });
store.dispatch({ type: 'filters/colorFilterChanged', payload: { color: 'red', changeType: 'added' } });


unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
