import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        const content = await fs.readFile(PATH_DB);
        return content.toString();
    }
    catch (error) {
        console.log(error);
    }
};

console.log(await getAllContacts());
