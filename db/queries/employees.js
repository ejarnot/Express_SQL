const Query  = require("../models")

const allEmployees = async () => {
    return await Query("SELECT * FROM employees")
}

const oneEmployee = async (id) => {
    return await Query("SELECT * FROM employees WHERE EmployeeId = ?", [
        id,
    ]);
}

const addEmployee = async (employee) =>{
    return await Query("INSERT INTO employees SET ?", [employee])
}

const updateEmployee = async(employeeDetails, id) =>{
    return await Query("UPDATE employees SET ? WHERE EmployeeID = ?", [employeeDetails, id])
}

const removeEmployee = async(id) => {
    return await Query("DELETE FROM employees WHERE EmployeeID = ?", [id])
}

module.exports = {
    allEmployees,
    oneEmployee,
    addEmployee,
    updateEmployee,
    removeEmployee,
}