import {createStore,applyMiddleware,combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import modules from './modules';
import {flatModules} from './modules/functions';

const createAppStore = (reducer, ...middleware) => {
  //middleware.push(thunk)
  const store = createStore(
    reducer,
    applyMiddleware(createLogger())
  );
  return store
}

export const combineModuleReducers = modules => {
  const reducers = {}
  const flat = flatModules(modules)
  for (let i = 0; i < flat.length; i++) {
    const red = flat[i].reducer
    if (typeof(red) !== 'function') {
      throw new Error('Module ' + i + ' does not define reducer!')
    }

    reducers[flat[i].MODULE] = red

    // if(typeof(flat[i].children) === 'object'){
    //   for(let j in flat[i].children){
    //     if(typeof(flat[i].children[j].reducer) !== 'function'){
    //       throw new Error('Module ' + j + ' does not define reducer!')
    //     }

    //     reducers[j] = flat[i].children[j].reducer
    //   }
    // }
  }
  return reducers
}

export default createAppStore(combineReducers(combineModuleReducers(modules)));