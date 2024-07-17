const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers');


// instantiate the Blog model
//const model = require('./models/Blog');





const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);


sequelize.sync().then(() => {   
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        });
});