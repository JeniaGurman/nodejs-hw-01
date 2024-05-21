import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
    try {
        const content = await fs.readFile(PATH_DB);
        const contacts = JSON.parse(content);
        const result = contacts.filter(() => {
      return Math.random() >= 0.5;
    });
        await fs.writeFile(PATH_DB, JSON.stringify(result));
    }
    catch (error) {
        console.log(error);
    }
};

await thanos();



