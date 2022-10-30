const express = require('express');
const app = express();
const categoryRoutes = require('./routes/category.route');
const port = require('./config/serverConfig');
// const port = 3000;
console.log(port);



categoryRoutes(app);

app.listen(port.port,()=>{
    console.log("Hey you are welcome on the port!",port.port);
});




