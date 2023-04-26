# Trivia Game

This is a small Trivia game built with React that fetches questions and answers from the Open Trivia API and allows users to answer the questions.

## Demo Link

 [https://trivia-game-rust.vercel.app/](https://trivia-game-rust.vercel.app/)

## Getting Started

To get started, you can clone this repository and install the dependencies:

```bash
git clone https://github.com/YoussefMohamed2k19/trivia-game.git
cd trivia-game
npm install
```

After that, you can start the development server:

```bash
npm start
```

This will start the app at [http://localhost:3000](http://localhost:3000) in your browser.

Then, in a new terminal window, start Cypress:

```
npm run cypress:open
```

This will open the Cypress test runner, where you can select the `game.cy.js` test and run it.

## Usage

To play the game, simply enter your answer in the text field and click the "Submit" button. The app will check your answer and show you whether you were correct or incorrect.

After you submit your answer, the app will wait 30 seconds and then fetch a new question.

## Code Structure

The code is organized into several files and directories:

- `src/App.js`: The main component that renders the Trivia component and provides some basic styling
- `src/components/Header/Header.js`: A simple component that displays the app title
- `src/pages/Trivia/Trivia.js`: The Trivia component that contains the game logic and renders the question, answer input, and result messages
- `src/pages/Trivia/Trivia.module.css`: The stylesheet for the Trivia component
- `src/index.js`: The entry point for the app
- `cypress/e2e/game.cy.js`: The file of testing the game flow

## Dependencies

The app uses the following dependencies:

- `axios`: A library for making HTTP requests
- `react`: A library for building user interfaces
- `react-dom`: A package that provides DOM-specific methods for React
- `react-scripts`: A set of scripts and configuration used by Create React App
- `cypress`: End-to-end testing framework for web applications

## Contributing

If you find any issues or have suggestions for improving the game, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
