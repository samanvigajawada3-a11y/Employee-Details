import {useLocation} from "react-router"

function Employee() {
  // read state received in navigation
  const {state} = useLocation()

  return (
    <div className="mt-30 mx-auto w-150">
      <h1 className="text-5xl pl-30">Employee Details</h1>
      <div className="bg-gray-200 text-3xl p-20 rounded-2xl mt-5">
        <p>Name : {state.name}</p>
        <p>Email : {state.email}</p>
        <p>Mobile : {state.mobile}</p>
        <p>Designation : {state.designation}</p>
        <p>Company Name : {state.companyName}</p>
      </div>
    </div>
    
  )
}

export default Employee