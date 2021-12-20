export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisidleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizeFilter = filter.toLowerCase().trim();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter),
  );
};
