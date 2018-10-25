//install -> import -> use

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import {addExpense} from  './actions/expenses'
import {setTextFilter, sortByAmount} from './actions/filters'
import getVisibleExpenses from  './selectors/expenses'
const store = configureStore();

 const expenseWater = store.dispatch(addExpense({description: 'Water bill', amount: 100, createdAt: 1000}))
 const expenseGas = store.dispatch(addExpense({description: 'Gass bill', amount: 200, createdAt: 2000}))
 const setFilter =  store.dispatch(setTextFilter('water'));


 const state = store.getState();
 const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
 console.log(visibleExpenses)

console.log(store.getState())

ReactDOM.render(<AppRouter/>, document.getElementById('app'));


















// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch












