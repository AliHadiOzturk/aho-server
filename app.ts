import express = require('express');
// rest of the code remains same
import httpErrors = require('http-errors')

import { config } from 'dotenv';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import routes from './src/routes';

import cors = require('cors');


//dotenv configuration
config();

//typeorm database connection created
createConnection().then(data => {
    console.log("connection created")
})


const app = express();
app.use(express.json())
app.use(cors())


app.get('/', (req: any, res) => {
    res.send('Express + TypeScript Server')
});


app.use(function (req, res, next) {
    res.sendStatus(404);
    // next(httpErrors(404, "Not found!"));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500).send();
    // res.render('error');
});

app.use("/", routes);

app.listen(process.env.PORT, () => {
    console.log(app._router.stack);
    console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
});