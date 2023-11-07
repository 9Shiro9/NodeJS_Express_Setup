const express = require("express")

const bodyParser = require("body-parser")

const app = express()

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")

app.use(bodyParser.urlencoded());

app.use("/admin" , adminRoutes)
app.use(shopRoutes)

app.use((req, res , next) => {
  res.status(404).send("<h1>Page Not found</h1>")
})

app.listen(8000)