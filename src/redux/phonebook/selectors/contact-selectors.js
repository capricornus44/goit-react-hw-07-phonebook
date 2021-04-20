import { createSelector } from '@reduxjs/toolkit';

export const itemsSelector = state => state.contacts.items;
export const filterSelector = state => state.contacts.filter;

export const getFilteredContact = createSelector(
  [itemsSelector, filterSelector],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export const getContactById = createSelector(
  [itemsSelector, (_, contactId) => contactId],
  (items, contactId) => items.find(contact => contact.id === contactId),
);
