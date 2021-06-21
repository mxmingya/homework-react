### How the app works: 
 - in the unziped code directory, run npm install, then npm start. 
 - click button with "Get Air Quality Report" to fetch data and display the proper data in the tables. 
 - "Areas With Air Pollution" table contains communities that has µg/m^3 as unit and has an average reading of 5 or more. 
 - "Areas With No Air pollution" table contains the rest of the communities that does not meet the above criteria. 

### TODO list if get more time: 
 within 48 hours the app, I build some omponents with the basic of React framework. however with more time this app should: 
  - Comes with a data store with Redux, where most of shared data should be stored instead of states of a class. 
  - Comes with an API utils store which provides functions to make API calls to the endpoint. 
  - Better CSS styles. 
  - Component testings. 
  - Root div that acts as a parent div to all the components(Forms, Tables etc)
  - Refactor of Form components so that text input should be a reusable child component. 
  - provide link to google map for each of the coordinates. 
  - More functionalities of the table: sorting, filtering, etc..

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.