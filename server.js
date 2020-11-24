const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = process.env.PORT || 3001;

//middleware -------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes
const routes = require('./routes');

//routes -----------------------------
app.use('/register', routes.register);
app.use('/login', routes.login);
app.use('/blogs', routes.blogs);
app.use('/users', routes.users);


app.listen(PORT, () => {
  console.log(`Express server is running on PORT ${PORT}`)
})