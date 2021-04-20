import { createReducer } from '@reduxjs/toolkit';
import {
  getContactsSuccess,
  addContactSuccess,
  deleteContactSuccess,
  filterContact,
} from '../actions/contact-action';

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => [...payload],
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export { items, filter };
