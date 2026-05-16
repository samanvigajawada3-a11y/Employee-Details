import Header from "./Header"
import {Outlet} from "react-router"
function RootLayout() {
  return (
    <div>
        <Header/>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout