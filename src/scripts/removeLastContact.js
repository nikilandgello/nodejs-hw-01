import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const existingContacts = await readContacts();
    existingContacts.pop();

    await writeContacts(JSON.stringify(existingContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
