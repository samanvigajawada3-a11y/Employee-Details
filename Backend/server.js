import exp from "express"
import {employeeApp} from "./API/EmployeeAPI.js"
import {connect} from "mongoose"
import cors from "cors"

const app = exp()

// add cors middleware
//CORS (Cross-Origin Resource Sharing) is used to allow your frontend and backend to talk to each other when they are on different origins.
app.use(cors({
    origin : ["http://localhost:5173"]
}))

// body parser midleware
app.use(exp.json())
// employee api middleware
app.use("/employee-api",employeeApp)

// port number
const port = 3000

// connect to DB
async function connectDB(){
    try{
        await connect(DB_URL)
        console.log("DB connection success")
        // conection
        app.listen(port,()=>console.log(`Server is listening to the port ${port}.....`))
    }catch(err){
        console.log("Error occured in DB : ",err.message)
    }
}
connectDB()

// Error handling middleware
app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message : "error",
        reason : err.message
    })
})
