const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded(({extended: false})));
app.use(express.static(path.join(__dirname, 'public')));

const adminRoutes = require('./routes/admin');
const publicRoutes = require('./routes/public');
const socialRoutes = require('./routes/social');

app.use(adminRoutes);
app.use(publicRoutes);
app.use(socialRoutes);

app.listen(3000);