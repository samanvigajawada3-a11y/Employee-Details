import exp from "express"
import { employeeApp } from "./API/EmployeeAPI.js"
import { connect } from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
// configure dotenv
dotenv.config()
const app = exp()
// CORS middleware
app.use(cors({
    origin: [
        "http://localhost:5173",
        "https://your-frontend.vercel.app"
    ]
}))
// body parser middleware
app.use(exp.json())
// employee api middleware
app.use("/employee-api", employeeApp)
// port number
const port = process.env.PORT || 3000
// connect to DB
async function connectDB() {
    try {
        // connect to MongoDB Atlas
        await connect(process.env.DB_URL)
        console.log("DB connection success")
        // start server
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}.....`)
        })
    } catch (err) {
        console.log("Error occurred in DB:", err.message)
    }
}
connectDB()
// Error handling middleware
app.use((err, req, res, next) => {
 res.status(err.status || 500).json({
        message: "error",
        reason: err.message
 })
})
