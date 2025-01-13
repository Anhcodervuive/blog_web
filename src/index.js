const express = require('express')
const morgan = require('morgan')
const path = require('path')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

// Connect to DB
db.connect()

// HTTP Loggers
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '/public')))

// Template engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '/resource/views'))

// Middleware handler data with post method from form
app.use(express.urlencoded())
app.use(methodOverride('_method'))

route(app)

app.listen(port, () => console.log(`listening on localhost:${port}`))
