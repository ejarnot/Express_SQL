const express = require("express")
const apiRouter = require("./routes")

const app = express()
app.use(express.json())
app.use(apiRouter)

app.use((err, req, res, next) =>{
    res.status(err.status || 500).json({msg: err.message})
})

app.listen(3000, console.log("Server is listening on port 3000..."))
