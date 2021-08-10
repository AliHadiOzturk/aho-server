import express = require('express');
// rest of the code remains same
import httpErrors = require('http-errors')

import { config } from 'dotenv';
import "reflect-metadata";
import { createConnection } from 'typeorm';
import { LogMiddleware } from './src/middlewares/log-middleware';
import routes from './src/routes';
import AppInitializer from './src/utils/appInitializer';

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
app.use(LogMiddleware())
// app.on('listening', function () {
//     console.log("listening")
//     new AppInitializer().init();
// });
// app.get('/', (req: any, res) => {
//     res.send('Express + TypeScript Server')
// });

app.use("/", routes);
app.use("/common/init", new AppInitializer().init)
app.use(function (req, res, next) {
    res.sendStatus(404);
    // next(httpErrors(404, "Not found!"));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    console.error(err);
    // render the error page
    res.status(err.status || 500).send(err);
    // res.render('error');
});




app.listen(process.env.PORT, () => {
    app.routes;
    console.log(`⚡️[server]: Server is running at https://localhost:${process.env.PORT}`);

});