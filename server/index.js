const express = require('express')
const pool = require('./database/db')
const blogRoute = require('./routes/blogRoute.js')
const cors = require('cors')
const app = express()
const port = 5000

//middleware
app.use(cors())
app.use(express.json())

//defining routes
app.use('/blogs', blogRoute)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
