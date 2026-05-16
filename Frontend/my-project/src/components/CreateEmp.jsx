import {useForm} from "react-hook-form"
import {useState} from "react"
import {useNavigate} from "react-router"
function CreateEmp() {
  // state
  const {register,handleSubmit,formState:{errors}} = useForm()
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState("")
  const navigate = useNavigate()

  // form submit function
  const onFormSubmit = async(newEmpObj)=>{
    try{
      // make HTTP POST request
      setLoading(true)
      let res = await fetch("http://localhost:3000/employee-api/employees",{
        method:"POST",
        headers: {"Content-Type" : "application/json"},
        body : JSON.stringify(newEmpObj)
      })
        if(res.status === 201){
          // navigate to employees component programatically
          navigate("/list")
        }
        else{
          let errorRes = await res.json()
          throw new Error(errorRes.reason)
        }
    }catch(err){
      // deal with error
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }

  if(loading){
    return <p className="text-red-600 text-center mt-40 text-5xl">Loading...</p>
  }
  if(error){
    return <p className="text-red-600 text-center mt-40 text-3xl">{error}</p>
  }

  // return
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl mb-10 text-gray-600">Create New Employee</h1>
      <form className="bg-gray-200 mx-20 py-5" onSubmit={handleSubmit(onFormSubmit)}>
        <div className="text-2xl mb-3">
          <input className="border-3 border-gray-600 rounded-2xl p-2" type="text" placeholder="Enter name" {...register("name")}/>
        </div>
        <div className="text-2xl mb-3">
          <input className="border-3 border-gray-600 rounded-2xl p-2" type="text" placeholder="Enter email" {...register("email")}/>
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
        <button className="bg-gray-400 p-3 rounded-4xl text-2xl" type="submit">Add Employee</button>
      </form>
    </div>
  )
}

export default CreateEmp