const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars');

const SortMiddleware = require('./app/middlewares/SortMiddleware');

const app = express()
const port = 3000


const route = require('./routes'); // khong can ./routes/index.js vì nó sẽ tự động truy cập file index
const db = require('./config/db');

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended : true
}))
app.use(express.json())

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(SortMiddleware)


//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', handlebars(
  {
    extname : '.hbs',
    helpers : {
        sum : (a, b) => a+b,
        sortable : (field, sort) => {
          const sortType = field === sort.column ? sort.type : 'default';
          const icons = {
            default : 'oi oi-elevator',
            asc : 'oi oi-sort-ascending',
            desc : 'oi oi-sort-descending',
          };
          const types = {
            default : 'asc',
            asc : 'desc',
            desc : 'asc',
          };
          
          const icon = icons[sortType];
          const type = types[sortType];

          return `<a href="?_sort&column=${field}&type=${type}">
                        <span class="${icon}"></span>
                  </a>`;

        },
    }
}));
app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'resource','views'));

 
// Chuyen het qua routes/index.js
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})