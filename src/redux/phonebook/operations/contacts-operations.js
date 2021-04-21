import axios from 'axios';
import {
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from '../actions/contact-action';

export const getContacts = () => async dispatch => {
  dispatch(getContactsRequest());
  try {
    const response = await axios.get(
      `https://phonebook-react-default-rtdb.firebaseio.com/contacts.json`,
    );
    if (response.data) {
      const contacts = Object.keys(response.data).map(key => ({
        id: key,
        ...response.data[key],
      }));
      dispatch(getContactsSuccess(contacts));
    }
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const response = await axios.post(
      `https://phonebook-react-default-rtdb.firebaseio.com/contacts.json`,
      contact,
    );
    response.data &&
      dispatch(addContactSuccess({ id: response.data.name, ...contact }));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await axios.delete(
      `https://phonebook-react-default-rtdb.firebaseio.com/contacts/${id}.json`,
    );
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
