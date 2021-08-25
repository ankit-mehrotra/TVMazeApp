# Application description

This project was bootstrapped with Create React App.

index.tsx is the entry point hooking redux into the App

App.tsx is the main file loading all child components - Search, Movie List , Table Grid
App.css is the file containing all css properties with responsive layout. Added Poppins font family for text.

Used folder structure domainName/ components and /store to extend the existing functionality

Used components directory for Search, Movie List , Table Grid Components
Used store directory for actions,reducers,sagas, store and types files.

Types.ts file contains different types for app.
Store.ts contains the Store of the app with redux saga.
Actions files are used for different actions on MovieList and TableGrid
Reducer files are again used for different reducers on MovieList and TableGrid

Used axios library to fetch the data from tvamaze url

## Functionality

On Initial load the Movie List will appear blank and as user types in the search box grid will appear.
The user has option to Add an movie to Table using Add button
On clicking of a Image of Movie List , the user is navigated to new url.
On hovering of any Movie List item the name of movie and Genre is shown to user.
Once a movie is added to the table it cannot be re-added
Table Grid has functionality to delete a particular row on click of delete button.

## Available Scripts

**Please run yarn install or npm install if the cloning the project and running.

In the project directory, you can run:


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
