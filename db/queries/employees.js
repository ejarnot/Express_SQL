const { Query } = require("../models")

const allEmployees = async = () => {
    return Query("SELECT EmployeeID, FirstName, LastName, Title FROM employees")
}

const oneEmployee = async = (id) => {
    return Query("SELECT EmployeeID, FirstName, LastName, Title FROM employees", [
        id,
    ]);
}

const addEmployee = async = (body) =>{
    return Query("INSERT INTO employees SET ?", [body])
}

const updateEmployee = async = (body, id) =>{
    return Query("UPDATE employees SET ? WHERE EmployeeID = ?", [body, id])
}

const removeEmployee = async = (id) => {
    return Query("DELETE FROM employees WHERE EmployeeID = ?", [id])
}

module.exports = {
    allEmployees,
    oneEmployee,
    addEmployee,
    updateEmployee,
    removeEmployee,
}