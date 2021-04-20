import { createAction } from "@reduxjs/toolkit"

export const getContactsRequest = createAction('@contact/getRequest');
export const getContactsSuccess = createAction('@contact/getSuccess');
export const getContactsError = createAction('@contact/getError');

export const addContactRequest = createAction('@contact/addRequest');
export const addContactSuccess = createAction('@contact/addSuccess');
export const addContactError = createAction('@contact/addError');

export const deleteContactRequest = createAction('@contact/deleteRequest');
export const deleteContactSuccess = createAction('@contact/deleteSuccess');
export const deleteContactError = createAction('@contact/deleteError');

export const filterContact = createAction('@contact/filter', ({ target }) => ({
  payload: target.value,
}));



