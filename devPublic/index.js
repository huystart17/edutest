 /**
 * Created by huy on 5/24/17.
 */
const m = require('mithril')
const client = require('./model/baseClient')
const studentRoutes = require('./route/studentRoute')
const guetsRoute = require('./route/guestRoute')
client.authenticate()
    .then(() => {
        studentRoutes()
    })
    .catch((err) => {
        console.log(err)
        guetsRoute()
    })
