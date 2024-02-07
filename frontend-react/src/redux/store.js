import { createStore, combineReducers } from 'redux';
import {authReducer, userListReducer} from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  userList: userListReducer
});

const store = createStore(rootReducer);

export default store;