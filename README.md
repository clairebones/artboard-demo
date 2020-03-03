# Sketch Artboard Demo

This project implements a demo of a document and artboard viewer for Sketch Cloud, based on the brief detailed [here](https://github.com/sketch-hq/frontend-code-test).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) for convenience given the recommended time constraints of the work.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Decisions Made

I decided to use create-react-app to decrease the required time in setting up the initial app structure and build process.

I decided to use some BEM and some non-BEM CSS just to show that I am comfortable using the technique, and imported the SVG files into the css rather than using as background-images simply for readability.

## Improvements

I would, if I had more time, build tests which ensure that the data correctly loads and that the components are displayed on the page as expected. I would ideally use a mixture of unit tests and snapshot tests for this. I qould lean towards not using visual regression tests as the artboards loaded in might have changes, causing false failures of the tests.

I would also have added the document code as another URL parameter, defaulting to the share code `Y8wDM` if none was provided in the URL. As part of this, I would find a way to better optimise the GraphlQL queries, either by using an artboard-specific if I had access to or influence over the schema, or by making the query at a higher level and sharing the data across pages.

I would also like to further improve the accessibility of the app, current all images are either described (if they are buttons or the main image) or marked as presentation-only if they do not provide useful content.

I would also better structure the files, creating folders for each component that the css and JS could live in fo example, in order to improve readibility if the app became larger.

If I were to continue with the app I would also have liked to fully add the Progressive Web App functionality hinted at in the initial app setup.