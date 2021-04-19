import { createReducer } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  storageContact,
  filterContact,
} from '../actions/contact-action';

const removeContact = (state, { payload }) =>
  state.filter(contact => contact.id !== payload);

const items = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: removeContact,
  [storageContact]: (state, { payload }) => payload,
});

const filter = createReducer('', {
  [filterContact]: (state, { payload }) => payload,
});

export { items, filter };
