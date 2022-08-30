import { legacy_createStore as createStore } from 'redux';
import usuarioReducer from './usuarioReducer';

const store = createStore(usuarioReducer);

export default store;