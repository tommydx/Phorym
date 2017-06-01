require('dotenv').config();
const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

// set the port
const PORT = process.argv[2] || process.argv.PORT || 3000;

const app = express();
