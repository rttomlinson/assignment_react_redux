import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// Import the createStore method from Redux
import { createStore } from 'redux';

import { groceryApp } from './reducers';
import { Provider } from 'react-redux';

import { addItem, setPurchasedFilter, setCategoryFilter } from './actions';

let store = createStore(groceryApp);

let unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

console.log('initial store state:', store.getState());

store.dispatch(
  addItem({
    name: 'Appley Apple',
    description: 'It is tasty',
    category: 'Foods',
    purchased: false,
    amount: 10
  })
);

store.dispatch(
  addItem({
    name: 'Tasty cucumber',
    description: 'It is tasty',
    category: 'Weapons',
    purchased: true,
    amount: 13
  })
);

store.dispatch(
  addItem({
    name: 'Healthy cucumber',
    description: 'It is healthy',
    category: 'Weapons',
    purchased: false,
    amount: 20
  })
);

store.dispatch(
  addItem({
    name: 'Gross cucumber',
    description: 'It is gross',
    category: 'Toys',
    purchased: true,
    amount: 6
  })
);

unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
