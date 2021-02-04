import express = require('express');
// rest of the code remains same
import httpErrors = require('http-errors')

import { config } from 'dotenv';
import "reflect-metadata";
import { CreateConn } from './app/conn';
import cors = require('cors');


//dotenv configuration
config();
//typeorm database connection created
CreateConn().then(data => {
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
    res.status(err.status || 500);
    res.render('error');
});

app.listen(process.env.PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);
});