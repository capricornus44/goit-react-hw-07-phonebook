import { createAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"
import { ADD_CONTACT, DELETE_CONTACT, STORAGE_CONTACT, FILTER_CONTACT } from "../constants/contacts-actionType"

const addContact = createAction(ADD_CONTACT, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}))

const deleteContact = createAction(DELETE_CONTACT)
const storageContact = createAction(STORAGE_CONTACT)
const filterContact = createAction(FILTER_CONTACT, ({ target }) => ({
  payload: target.value,
}))

export { addContact, deleteContact, storageContact, filterContact }
