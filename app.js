const express = require ('express');
const path = require ('path');

const app = express();
app.use(express.urlencoded({extended : false}));
