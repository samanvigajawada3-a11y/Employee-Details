import exp from "express"
import {employeeModel} from "../models/EmployeeModel.js"
 
export const employeeApp = exp.Router()

employeeApp.post("/employees",async(req,res)=>{
    // get the details from the request.body
    const newEmployee = req.body
    // make it as a document
    const newEmployeeDocument = new employeeModel(newEmployee)
    // save it in the data base
    await newEmployeeDocument.save()
    res.status(201).json({message : "Employee created"})
})

employeeApp.get("/employees",async(req,res)=>{
    let employeeList = await employeeModel.find()
    // send the response
    res.status(200).json({message : "Employee Details",payload : employeeList})
})

employeeApp.put("/employees/:id",async(req,res)=>{
    let modifiedEmployee = req.body
    // find it by id 
    const eid = req.params.id
    // Find the employee using eid from the DB
    const updatedEmployee = await employeeModel.findByIdAndUpdate(eid,{$set : {...modifiedEmployee}},{returnDocument:"after"})
    if(!updatedEmployee){
        res.status(404).json({message : "Employee not found to update"})
    }
    res.status(200).json({message : "Employee updated",payload : updatedEmployee})
})

employeeApp.delete("/employees/:id",async(req,res)=>{
    const eid = req.params.id
    // Find the employee using eid from the DB
    const deletedEmployee = await employeeModel.findByIdAndDelete(eid)
    // console.log(deletedEmployee)
    if(!deletedEmployee){
        res.status(404).json({message : "Employee not found to delete"})
    }
    res.status(200).json({message : "Employee deleted",payload : deletedEmployee})
})