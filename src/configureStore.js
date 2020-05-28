import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loadState, saveState} from './localStorage';
import { devToolsEnhancer } from "redux-devtools-extension";
// import { deleteState } from './localStorage';
import throttle from 'lodash/throttle';

import reducer from './reducers';

// Se configura la store
// Se hace en un archivo aparte para solo llamar a store en otros componentes
// Cualquier accion relacionada como subscribe, se maneja dentro de este metodo 
const configureStore = () => {
    const persistedState = loadState()

    const rootReducer = combineReducers({
        reducer,
        form: formReducer
     });

    const store = createStore(
        rootReducer,
        persistedState,
        devToolsEnhancer()
    );

    store.subscribe(throttle(() => {
        saveState(store.getState())
    }, 1000));

    // deleteState(store.getState());

    store.subscribe(() => console.log(store.getState()))

    return store;
}

export default configureStore;