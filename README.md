# RepMoveQA
Testing

Set up

First you'll need to create an .env file and install the dependencies:
```bash
cd RepMoveQA
cp .env.example .env
```
Then open the .env file you just created and replace the values with your actual password.
Example: 
```dotenv
USER_PASSWORD=Qwerty123
```

Run next commands:
```bash 
npm init -y
npm i
npx playwright install
```
Opens the Playwright Test Runner in a visual interface.
```bash
npx playwright test --ui   
```
 