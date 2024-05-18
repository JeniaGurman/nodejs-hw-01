import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
    try {
        const content = await fs.readFile(PATH_DB);
        const contacts = JSON.parse(content);
        return contacts.length;
    }
    catch (error) {
        console.log(error);
    }
};

console.log(await countContacts());
