import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './phonebook/reducers/root-reducer';

const store = configureStore({
  reducer: { contacts: rootReducer },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
