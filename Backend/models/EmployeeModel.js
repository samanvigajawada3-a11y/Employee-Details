import {Schema,model} from "mongoose"

const employeeSchema = new Schema({
    name : {
        type : String,
        required : [true,"name required"]
    },
    email : {
        type : String,
        required : [true,"email required"],
        unique:[true,"email already exists"]
    },
    mobile : {
        type : Number,
        required : [true,"mobile number required"]
    },
    designation : {
        type : String,
        required : [true,"designation required"]
    },
    companyName : {
        type : String,
        required : [true,"company name required"]
    }},
    {
        versionKey:false,
        timestamps:true
    }
)

// Creating model
export const employeeModel = model("employee",employeeSchema)