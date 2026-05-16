import {NavLink} from "react-router"
function Header() {
  return (
    <nav className="flex justify-end gap-4 bg-gray-500 p-5 text-2xl">
      <NavLink to="" className={({isActive})=>isActive?"text-yellow-500":""}>Home</NavLink>
      <NavLink to="create-emp" className={({isActive})=>isActive?"text-yellow-500":""}>Create</NavLink>
      <NavLink to="list" className={({isActive})=>isActive?"text-yellow-500":""}>ListOfEmps</NavLink>
    </nav>
  )
}

export default Header