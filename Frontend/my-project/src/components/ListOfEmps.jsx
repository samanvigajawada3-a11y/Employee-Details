import { useState, useEffect } from "react";
import {useNavigate} from "react-router"
import axios from "axios"

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState("")
  const navigate= useNavigate()

  const gotoEmployee = (empObj)=>{
    // navigate to Employee
    navigate("/employee",{state:empObj})
  }

  const gotoEditEmployee = (empObj)=>{
    // navigate to EditEmployee
    navigate("/edit-emp",{state:empObj})
  }

  const deleteEmpById = async(id)=>{
    try{
      setLoading(true)
      let res = await axios.delete(`https://employee-details-a3il.onrender.com/employee-api/employees/${id}`)
      if(res.status === 200){
        // get latest employees data
        getEmps()
      }
    }catch(err){
      // deal with error
      // console.log(err.message)
      setError(err)
    }finally{
      setLoading(false)
    }
  }

  if(loading){
    <p className="text-red-600 text-center mt-40 text-5xl">Loading...</p>
  }
  if(error){
    <p className="text-red-600 text-center mt-40 text-3xl">{error}</p>
  }

  async function getEmps() {
      let res = await axios.get("https://employee-details-a3il.onrender.com/employee-api/employees");
      if (res.status === 200) {
        let resObj = await res.data;
        setEmps(resObj.payload);
      }
    }

  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center mb-10">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center text-2xl rounded shadow-2xl">
            <p>{empObj.email}</p>
            <p className="mb-5">{empObj.name}</p>
            {/* 3 buttons */}
            <div className="flex justify-around">
              <button onClick={()=>gotoEmployee(empObj)} className="bg-green-400 rounded-2xl p-2 text-white">View</button>
              <button onClick={()=>gotoEditEmployee(empObj)} className="bg-yellow-400 rounded-2xl p-2 text-white">Edit</button>
              <button onClick={()=>deleteEmpById(empObj._id)} className="bg-red-400 rounded-2xl p-2 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;