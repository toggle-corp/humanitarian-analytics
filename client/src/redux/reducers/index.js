import localforage from 'localforage';
import { persistCombineReducers } from 'redux-persist';

import domainDataReducer from './domainData';

const storeConfig = {
    key: 'humanitarian-analytics',
    version: 1,
    storage: localforage,
};

const reducers = {
    domainData: domainDataReducer,
};

const reducer = persistCombineReducers(storeConfig, reducers);
export default reducer;
