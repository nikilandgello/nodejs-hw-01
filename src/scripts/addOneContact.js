import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const existingContacts = await readContacts();
    const newContact = createFakeContact();
    const updatedContacts = [...existingContacts, newContact];

    await writeContacts(JSON.stringify(updatedContacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
