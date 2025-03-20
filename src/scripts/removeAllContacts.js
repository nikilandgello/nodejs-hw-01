import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts(JSON.stringify([]));
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
