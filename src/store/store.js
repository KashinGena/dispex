import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import companyReducer from './reducers/company'
 import housesReducer from './reducers/houses'
// import cartReducer from './reducers/cart'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    companyReducer,
    housesReducer
  
})
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))


export default store