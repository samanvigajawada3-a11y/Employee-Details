import {useForm} from "react-hook-form"
import {useLocation,useNavigate} from "react-router-dom"
import {useEffect} from "react"
import axios from "axios"

function EditEmployee() {

  const{register,handleSubmit,formState:{errors},setValue} = useForm()
  const {state} = useLocation()

  const navigate = useNavigate()
  
  useEffect(()=>{
    setValue("name",state.name)
    setValue("email",state.email)
    setValue("mobile",state.mobile)
    setValue("designation",state.designation)
    setValue("companyName",state.companyName)
  },[])

  const saveModifiedEmployee = async(modifiedEmp)=>{
    // make HTTP PUT request
    try{
        const res = await axios.put(`https://employee-details-a3il.onrender.com/employee-api/employees/${state._id}`,modifiedEmp)
        if(res.status === 200){
          navigate("/list")
      }
    }catch(err){
      <p>{err.message}</p>
    }
  }

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl mb-10 text-gray-600">Edit Employee</h1>
      <form className="bg-gray-200 mx-20 py-5" onSubmit={handleSubmit(saveModifiedEmployee)}>
        <div className="text-2xl mb-3">
          <input className="border-3 border-gray-600 rounded-2xl p-2" type="text" placeholder="Enter name" {...register("name")}/>
        </div>
        <div className="text-2xl mb-3">
          <input disabled className="border-3 border-gray-600 rounded-2xl p-2" type="text" placeholder="Enter email" {...register("email")}/>
        </div>
        <div className="text-2xl mb-3">
          <input className="border-3 border-gray-600 rounded-2xl p-2" type="text" placeholder="Enter mobile number" {...register("mobile")}/>
        </div>
        <div className="text-2xl mb-3">
          <input className="border-3 border-gray-600 rounded-2xl p-2" type="text" placeholder="Enter designation" {...register("designation")}/>
        </div>
        <div className="text-2xl mb-3">
          <input className="border-3 border-gray-600 rounded-2xl p-2" type="text" placeholder="Enter companyName" {...register("companyName")}/>
        </div>
        <button className="bg-green-400 p-3 rounded-4xl text-2xl" type="submit">Save</button>
      </form>
    </div>
  )
}

export default EditEmployee