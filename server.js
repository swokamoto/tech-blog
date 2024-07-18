const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');

// instantiate the Blog model
//const model = require('./models/Blog');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);


sequelize.sync().then(() => {   
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
});