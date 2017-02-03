# Barebones webapp skeleton

I've not been able to find a simple webapp skeleton that uses a lot of the necessary modules (like react , webpack), so here is one. Launch an issue if you find something wrong! 

# Stack
## Backend: 
- **[NodeJS](https://nodejs.org/en/)**: Backend server 
- **[ExpressJS](http://expressjs.com)**: MVC framwork for NodeJS
  - **[express-session](https://github.com/expressjs/session)**: Session management in expressJS
  - **[connect-mongo](https://github.com/jdesboeufs/connect-mongo)**: Persistent session store for expressJS
  - **[body-parser](https://github.com/expressjs/body-parser)**: Request body parsing middleware
- **[MongoDB](https://www.mongodb.com)**: Database
- **[MongooseJS](http://mongoosejs.com)**: Layer on top of MongoDB to abstart away some of the pain
- **[Node-Config](https://github.com/lorenwest/node-config)**: Configuration file handler for nodejs

#### Not installed but recommented
- **[PassportJS](http://passportjs.org)**: For any kind of user management

## Frontend:
- **[React](https://facebook.github.io/react/)**: UI Library
- **[Webpack](https://webpack.github.io)**: Library to build and bundle all assets for the frontend

#### Not installed but recommented
- **React UI Library**: Some UI library like [Grommet](https://grommet.github.io), [BlueprintJS](http://blueprintjs.com), [Ant](https://ant.design), [React-MDL](https://react-mdl.github.io/react-mdl/) etc.

## Common:
- **[npm](https://npmjs.com)**: Package manager for both frontend and backend libraries

#### Not installed but recommented
- **[async](http://caolan.github.io/async/docs.html#queue)**: Awesome library if you want to run more than one asynchronous job but have global control (like do something when all of them are done, run only _x_ tasks at any given time etc)

# App structure explained
```
├── LICENSE
├── README.md
├── app.js : this is your main nodejs entry file
├── config : store configuration files here (for example different configs for dev, production etc)
│   └── default.json
├── models : store mongoose schema’s here
│   └── people.js
├── package.json : npm config
├── public : : store static content here (for example your css, js files etc)
│   ├── README.md
│   ├── css
│   │   └── sample.css
│   └── dist : compiled files here - probably never commit this to git, since you can always recompile from views/assets
├── routes : store nodejs controllers here
│   ├── index.js
│   └── people.js
├── views : store nodejs views (the html/ejs etc.) here
│   ├── assets : I like to store the pre-compiled javascript here along with the views, because I like to put all frontend stuff together 
│   │   ├── common.jsx
│   │   ├── index.jsx
│   │   └── people.jsx
│   ├── index.ejs
│   └── people.ejs
└── webpack.config.js : Webpack config
```

# Some Notes
- Understand MVC (Model-View-Controller) before using this, as the app is designed around it
- I found it impossible to use a lot of cool libraries online without using a compiler like webpack. Webapps are no more simple html/css/js files anymore!
- My webpack config does a few things that I prefer: Most importantly, it reads your npm config, see's which libraries you are using for the front end, and compiles them into a single `vendor.js` file. This means all of MY code remains separate from outside code
