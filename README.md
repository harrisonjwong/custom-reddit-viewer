# custom-reddit-viewer

Project created for a company coding challenge.

Try it for yourself at https://custom-reddit-viewer.herokuapp.com.

### Technologies used

Primary framework: React

Others:

* npm
* Material UI
* Axios
* Heroku
* GitHub

### How to run locally

Open this directory in a command line and run `npm install`.

Once that is finished, type `npm start` and open [http://localhost:3000](http://localhost:3000) to view it in the browser. 

### Overview 

This is a React app that shows the hot posts on a given subreddit.

When the app opens, it default to [/r/all](https://reddit.com/r/all). You can type in a new subreddit in the text field at the top of the page and press enter to go to that subreddit. If that subreddit does not exist, the app ignores your request and alerts you that the subreddit does not exist.

There is a table containing the hot posts on the chosen subreddit. You can see the thumbnail in the leftmost column (defaults to `selfpost` if the post is a text post). The second column has the post title. The third column has the subreddit name: this is to support /r/all or /r/popular; it's not so useful for normal subreddits. The last (rightmost) column has two links: the link to the content of the post, and the comments for the post (for selfposts, these would be one in the same).

In terms of how the React app is set up: there is a single component called Subreddit. Within that component, there is a header, text field, and table. When the user submits a subreddit, an api call to Reddit is made to retrieve posts, which is stored in state. The table is then re-rendered based on the new state. To show /r/all immediately when the app opens, there is an api call in componentDidMount.

---

<img src="./food.png">

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


<!-- 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
!-->
