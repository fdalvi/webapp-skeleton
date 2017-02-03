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

