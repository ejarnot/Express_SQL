const express = require("express")
const { allEmployees, oneEmployee } = require("../db/queries/employees")

const router = express.Router()

router.get("/api/employees", async(req, res, next) =>{
    try{
        let data = await allEmployees()
        res.json(data)
    }catch(err){
        next(err)
    }
})

router.get("/api/employees/:id", async (req, res, next) =>{
    try{
        let { id } = req.params
        let data = await oneEmployee(id)
        res.json(data)

    }catch(err){
        next(err)
    }
})