# demo-api-performance

This project is an API performance testing framework built with [k6](https://k6.io/). It is designed to automate load and stress testing for RESTful APIs.

## Technologies

- **k6**: JavaScript-based load testing tool for APIs.
- **JavaScript (ES6 modules)**: Used for scripting test scenarios and helpers.
- **JSON**: Used for configuration and test data fixtures.

## Project Structure

```
demo-api-performance/
├── config/
│   └── local.json
├── fixtures/
│   └── postLogin.json
├── helpers/
│   └── authentication.js
├── tests/
│   ├── login.test.js
│   └── transferencias.test.js
├── utils/
│   └── variables.js
└── README.md
```

## How to Use

1. **Install k6**  
   [Download and install k6](https://k6.io/docs/getting-started/installation/) for your OS.

2. **Configure Environment**  
   Edit `config/local.json` to set your API base URL.

3. **Run a Test**  
   Use the terminal to run a test file, for example:

   ```sh
   k6 run tests/login.test.js
   k6 run tests/transferencias.test.js
   ```

4. **Test Scripts**
   - `tests/login.test.js`: Tests the login endpoint and checks for token response.
   - `tests/transferencias.test.js`: Tests the transfer endpoint using an authenticated token.

## Customization

- Add new test scenarios in the `tests/` folder.
- Update or add fixtures in `fixtures/` for different payloads.
- Use helper functions from `helpers/authentication.js` for authentication flows.

## Reporting

- By default, k6 outputs results to the console.
- You can generate HTML reports with:
  ```sh
  k6 run --out html tests/login.test.js
  ```

## License

This project is for educational and demonstration purposes.
