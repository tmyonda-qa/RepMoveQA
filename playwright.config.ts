import {defineConfig, devices} from "@playwright/test";

export default defineConfig({
    testDir: './src/specs',
    timeout: 30_000,
    expect: { timeout: 5000 },
    reporter: [['list'], ['html', { open: 'never' }]],
    use: {
        baseURL: 'https://dev-repmove-enterprise.web.app',
        headless: false,
        viewport: { width: 1280, height: 720 },
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
    projects: [
        // { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'webkit', use: { ...devices['Desktop Safari'] } },
    ],
});