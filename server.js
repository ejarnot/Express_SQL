const express = require("express")
const apiRouter = require("./routes")
const morgan = require("morgan")

const port = 3001;
const app = express()

app.use(morgan("dev"))

//parses incoming request body to json
app.use(express.json())

app.use("/api/v1", apiRouter)

//404 handler
app.use((req, res, next) => {
    try{
        res.status(404).send("404 Page Not Found")
    }catch(err){
        next(err)
    }
})

app.use((err, req, res, next) =>{
    res.status(err.status || 500).json({msg: err.message})
})

app.listen(port, () => console.log(`Server is listening on  ${port}`))
