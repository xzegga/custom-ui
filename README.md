# App Title

App description

## Installation

To get started, clone this repository and run `npm install` to install all the necessary dependencies.

```sh
git clone
cd my-react-app
npm install
```

## Configuring Environment Variables

Create a file called `.env` in the root folder and complete those enviroment keys:

```
VITE_OPENAI_KEY=<your-open-ai-key>
VITE_OPENAI_BASE=<azure-open-ai-url>
VITE_BACKEND_URL=<backend-url>
```

## Running the app

To start the development server, run the following command:

```sh
npm run dev
```

This will start a development server at `http://localhost:5173`.

## Running tests

To run the tests, use the following command:

```sh
npm test
```

This will run the tests using the [Vitest](https://vitest.dev/) test framework, which is a blazing fast unit test framework powered by Vite. Also the app uses additional libraries to create unit tests:

- [JestDOM](https://github.com/testing-library/jest-dom): a library that provides custom jest matchers for asserting on DOM elements.
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/): a library that provides a set of utilities for testing React components in a way that simulates how users interact with the app.

## Production build

To generate a production build, run the following command:

```sh
npm run build
```

This will create a `dist` folder with all the necessary files to deploy the app to a production environment.

## Linters and Prettier

This app uses [ESLint](https://eslint.org/) as a linter and [Prettier](https://prettier.io/) as a code formatter. The configuration for both of these tools is provided by [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app) from the [Create React App](https://create-react-app.dev/) project.

ESLint is a tool that analyzes code for potential errors and enforces consistent style and formatting. Prettier is a code formatter that helps maintain a consistent style throughout the codebase.

The `eslint-config-react-app` configuration provides sensible defaults for both ESLint and Prettier, including rules for React and JSX syntax. The configuration can be found in the `.eslintrc.json` file in the root of the project.

To run ESLint and Prettier on the codebase, you can use the following command:

```sh
npm run lint
```

This will run ESLint and Prettier on the entire codebase and output any errors or warnings.

In addition, this app is configured to run ESLint and Prettier automatically on file save. This is done using the [VSCode ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) for VSCode. To enable automatic formatting on save, add the following settings to your VSCode settings file:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true
}
```

Sure! Here's a short section on how to add ESLint and Prettier extensions to VSCode:

### Adding ESLint and Prettier Extensions to VSCode

1. Open VSCode and navigate to the extensions tab on the left-hand side.
2. Search for "ESLint" and click "Install".
3. Search for "Prettier" and click "Install".

That's it! With these extensions and configurations, your code will automatically be formatted using ESLint and Prettier rules every time you save your file.

## Additional libraries and tools

This app uses the following additional libraries and tools.

- [Tailwind CSS](https://tailwindcss.com/): a utility-first CSS framework for quickly styling the app.
- [Zustand](https://github.com/pmndrs/zustand): a simple and lightweight state management library for React that helps with managing the app's state.

## Some Notes about Libraries used to built this app

- This app was created with Vite as a build tool because it's fast and efficient for building modern web applications.
- npm as a package manager because it's a widely-used and popular package manager for JavaScript.
- Tailwind CSS as the CSS extension library because it allows me to quickly and easily style the app without writing custom CSS.
- TailwindUI because it provides a collection of pre-designed UI components built with Tailwind CSS that can be easily used in the app, which helps to save time and effort in designing and building UI components.
- Zustand as the state management library because it's a simple and lightweight library that helps with managing the app's state, without adding too much complexity to the codebase.
