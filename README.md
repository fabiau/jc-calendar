# Would You Rather

[![Netlify Status](https://api.netlify.com/api/v1/badges/690f0adc-a331-45e4-a71e-e5c07a12c4b3/deploy-status)](https://app.netlify.com/sites/adoring-gates-ebbba7/deploys)

For the live app [click here](https://adoring-gates-ebbba7.netlify.app/).

This is a simple calendar app where you can add reminders for a specific date/time and city.

## Development

### Installing Dependencies

You will need [Node.js](https://nodejs.org/en/) (v12+) to start and build this project.

Also will need to run the following command in order to install the project's dependencies before running other commands:

```bash
npm install
```

### Running in Development Mode

To start the project simply run:

```bash
npm start
```

This will start a [webpack](https://webpack.js.org/) development server that will serve the built web app. It also includes hot-reloading for live updates when you save a file.

If you want to use the forecast functionality you'll need to add the API key as follows:

```bash
REACT_APP_FORECAST_API_KEY=api_key_value npm start
```

If you are a _Windows_ user, open a [PowerShell](https://github.com/PowerShell/PowerShell) window and run:

```powershell
$env:REACT_APP_FORECAST_API_KEY="api_key_value"; npm start
```

You will need to replace `api_key_value` for the actual key.

> You can find more about the API and get a key at [https://www.weatherapi.com/](https://www.weatherapi.com/).

### Running Tests

```bash
npm test
```

This will start jest, which will run tests when tests changes or files that are being used for testing changes.

### Creating a Production Build

If you are on a _Unix_ based system, run:

```bash
NODE_ENV=production npm run build
```

If you are a _Windows_ user, open a [PowerShell](https://github.com/PowerShell/PowerShell) window and run:

```powershell
$env:NODE_ENV="production"; npm run build
```

> You can also set `NODE_ENV` as an environment variable in any way you would with any other variable, or you can also just omit it.
>
> Please note that if `NODE_ENV` is not set to `production`, some files will **not** be optimized.
>
> You will still need to set `REACT_APP_FORECAST_API_KEY` as mentioned in [Running in Development Mode](#running-in-development-mode), if you wish to use the forecast API functionality.

## Technologies

### React

Builds the view layer of the web app.

### Redux

Store's the app's data and acts as it's single source of truth. Is also responsible for predictable state changes through actions.

### Redux Saga

A Redux middleware that will handle async actions as well as complex actions, acting as a process manager.

> [https://redux-saga.js.org/](https://redux-saga.js.org/)

### Tailwind.css

The CSS framework of the web app. It is a utility-first CSS framework.

> [https://tailwindcss.com/](https://tailwindcss.com/)

## Licence

This project is provided under the [MIT License](./LICENSE.md).
