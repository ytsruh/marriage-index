const config = require('./config.js').get(process.env.NODE_ENV);
const express = require('express')
const path = require('path')
const Sequelize = require('sequelize');
const hbs = require('express-hbs');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon')

//Create express app
const app = express();
/*
  Set Middleware
*/
//Set static folder for public and static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
//Serve favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
//Set up bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//Set json pretty printing
app.set('json spaces', 2)
// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials',
  defaultLayout: __dirname + '/views/layouts/main.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

/*
  Set Routes
*/
const routes = require('./routes/routes')
app.use(routes);

/*
  Initialize app
*/
app.listen(config.port, () => {
  console.log(`Marriage Index is listening on port ${config.port} in the ${process.env.NODE_ENV || "development"} environment`)
})
