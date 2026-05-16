import {createBrowserRouter,RouterProvider} from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./components/Home"
import ListOfEmps from "./components/ListOfEmps"
import CreateEmp from "./components/CreateEmp"
import Employee from "./components/Employee"
import EditEmlpoyee from "./components/EditEmployee"

const routeObj = createBrowserRouter([
  {
    path:"/",
    element : <RootLayout/>,
    children:[
      {path:"",element:<Home/>},
      {path:"create-emp",element:<CreateEmp/>},
      {path:"list",element:<ListOfEmps/>},
      {path:"employee",element:<Employee/>},
      {path:"edit-emp",element:<EditEmlpoyee/>},
    ]
  }
])

function App() {
  return (
    <RouterProvider router = {routeObj}/>
  )
}

export default App