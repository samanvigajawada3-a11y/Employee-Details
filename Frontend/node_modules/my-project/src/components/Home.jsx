import { useContext } from "react"
import {counterContextObj} from "../contexts/ContextProvider"
import Test from "./Test"
import {useCounterStore} from "../store/CounterStore"

function Home() {

  return (
    <div className="text-center">
      <h1 className="text-7xl mt-60 text-gray-600 font-serif  animate-bounce">Welcome to the Home Page</h1>
    </div>
  )
}

export default Home