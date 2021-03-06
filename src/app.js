//install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import {addExpense} from  './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from  './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';



const store = configureStore();



store.dispatch(addExpense({description: 'Water bill', amount: 100}))
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent bill', amount: 1980 }))



 const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
 console.log(visibleExpenses)

console.log(store.getState())

const jsx = (
 <Provider store={store}>
    <AppRouter />
 </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));


















// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch












