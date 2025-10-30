import { test as base, Page } from '@playwright/test';
import { Home } from '../global/home';
import * as dotenv from 'dotenv';
dotenv.config();

type MyFixtures = {
    home: Home;
};

export const test = base.extend<MyFixtures>({
    home: async ({ page }, use) => {
        await use(new Home(page));
    },
});

export { expect } from '@playwright/test';