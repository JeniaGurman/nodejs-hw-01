import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        const resetContacts = [];
        await fs.writeFile(PATH_DB, JSON.stringify(resetContacts));
    }
    catch (error) {
        console.log(error);
    }
};

await removeAllContacts();
