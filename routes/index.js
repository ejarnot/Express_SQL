const express = require("express")
const { allEmployees, oneEmployee, addEmployee, updateEmployee, removeEmployee} = require("../db/queries/employees")

const router = express.Router()

/*router.get("/employees", async(req, res, next) =>{
    try{
        let data = await allEmployees()
        res.json(data)
    }catch(err){
        next(err)
    }
})*/

router.get("/employees/:id?", async (req, res, next) =>{
    let { id } = req.params;
    let data; 
    try{
        if(id){
          // if not a valid id, respond with an error
          if(isNaN(parseInt(id))){
            res.status(400).json(
                {
                msg : `you must provide a valid id of type:int`,
                value: id,
                success: false
            })
          }
           data = await oneEmployee(parseInt(id))
        }else{
           data = await allEmployees()
        }
        res.json(data)
    }catch(err){
        next(err)
    }
})

router.post("/employees", async(req, res, next) => {
    let employeeDetails = req.body;

    try{
        let { insertId } = await addEmployee(employeeDetails)
        res.json({msg: `successfully added new employee`, id: insertId})
    }catch(err){
        next(err)
    }
})

router.put("/employees/:id", async(req, res, next) => {
    let employeeDetails = req.body;
    let { id } = req.params;
    let result
    
    try{
        if(isNaN(parseInt(id))){
            res.status(400).json({
                msg: `You must provide a valid Employee Id`,
                value: id,
                success: false,
            })
        }
        id = parseInt(id);
        result = await updateEmployee(employeeDetails, id)
        res.json({ msg: `Successfully updated existing employee`, id})
    }catch(err){
        next(err)
    }
})

router.delete("/employees/:id", async (req, res, next) => {
    let { id } = req.params;
    let result

    try{
        if(isNaN(parseInt(id))){
            res.status(400).json({
                msg: `you must provide a valid EmployeeId of type:int`,
                value: id,
                success: false,
            })
        }
        id = parseInt(id);
        result = await removeEmployee(id);
        res.json({ msg: `successfully deleted employee`, id})
    }catch(err){
        next(err)

    }
})

module.exports = router