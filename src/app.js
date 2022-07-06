const express = require('express')
const app = express()
const swaggerUI = require('swagger-ui-express')
const doc = require('swagger-jsdoc')
const BodyParser = require('body-parser')
const swaggiffy = require("swaggiffy")
require('./models/db')
require('./auth/auth.middleware');
const swaggerOption = {
    swaggerDefinition: {
        info: {
            title: 'Exam test preparation API',
            version: '1.0.0',
            description: 'Swagger API with nodejs',
            contact: {
                name: 'damour',
                email: 'tuyishime'
            },
            servers: ['http://localhost:5000'],

        }
    },
    apis: ['./src/routes/*.js']

}
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))
const docs = doc(swaggerOption);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
const routers = require('./routes/index')
app.use('/api/v1', routers)

new Swaggiffy().setupExpress(app).swaggiffy();

// app.use(function (err, req, res, next) {
//     res.status(err.status || 500);
//     res.json({error:err})
// })
app.listen(5000, (e) => {
    console.log("app listening on 5000")
})
