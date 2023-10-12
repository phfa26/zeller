# Zeller

Zeller is a React application with TypeScript, showcasing advanced user interactions and data management. This project is currently in version 0.1.0.

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have a recent version of Node.js installed (preferably Node 14.x or later).
* You have a basic understanding of React and TypeScript.

## Installing Zeller

To install Zeller, follow these steps:

1. Clone the repository to your local machine by running `git clone https://github.com/phfa26/zeller`.
2. Navigate to the project directory.
3. Run `npm install` to install all the dependencies listed in the `package.json` file.

## AWS Configuration

Since `aws-exports.js` is included in the `.gitignore` file, you need to add this file manually to the `src` folder with your AWS configuration. Although this approach works for the sake of this exercise, it's not ideal for handling sensitive credentials. A more secure approach is using environment variables through a `.env` file or a secrets manager.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Technologies Used

This project is built with the following technologies:

- React 18.2.0
- TypeScript 4.9.5
- AWS Amplify 5.3.11
- Material UI 5.14.12
- And others listed in `package.json`

## Contact

If you want to contact me, you can reach me at [paulo@amaral.com.au](mailto:paulo@amaral.com.au).

## License

This project uses the MIT License.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
