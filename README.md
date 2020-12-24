# FRONTEND CODING CHALLENGE

## Idea of the App

Implement a webapp that list the most starred Github repos that were created in the last 30 days.

## Dependencies used

### Axios (https://www.npmjs.com/package/axios)

Plugin that allows us to get data from github API

#### installation: npm install axios

#### usage:

const axios = require('axios');
const response=axios.get(API_URL);

### styled-components (https://styled-components.com/)

styled-components is a plugin that lets us write actual CSS in our JavaScript.

#### Installatation : npm i styled-components

### material-ui (https://material-ui.com/)

Plugin that allow us the inject the Css Needed. In our Project, icons and Avatar

#### Installatation : npm install @material-ui/core

### timeago.js (https://timeago.org/)

is a simple library that is used to format datetime with .... time ago

#### Installatation : npm install timeago.js

#### Import: import \* as timeago from 'timeago.js';

#### Usage: {timeago.format(new Date(created_at).toLocaleDateString())}

# Deployement (https://www.netlify.com/)

I have used Netlify to code from github, to build and To deploy our App.

# DEMO FRONTEND CODING CHALLENGE

<img src="main.png">
