import {counterContextObj} from "../contexts/ContextProvider"
import {useContext} from "react"
import {useCounterStore} from "../store/CounterStore"

function Test() {
    // state
    const {counter,counter1,changeCounter,changeCounter1} = useContext(counterContextObj)
    // It extracts all the states
    // const {newCounter1,incrementCounter1,decrementCounter1} = useCounterStore()
    // To extract only specific states
    const newCounter1 = useCounterStore((state)=>state.newCounter1)
    const incrementCounter1 = useCounterStore((state)=>state.incrementCounter1)
    const decrementCounter1 = useCounterStore((state)=>state.decrementCounter1)
    const resetCounter1 = useCounterStore((state)=>state.reserCounter1)

    console.log("Test")

    // return
  return (
    <div className="text-center">
      <h1 className="text-4xl mt-40">Counter1 : {counter1}</h1>
      <button onClick={changeCounter1} className="bg-blue-400 p-5 rounded-2xl mt-5">Change</button>

      <h1 className="text-4xl mt-40">New Counter1 : {newCounter1}</h1>
      <button onClick={incrementCounter1} className="bg-blue-400 p-5 rounded-2xl mt-5">+</button>
      <button onClick={decrementCounter1} className="bg-blue-400 p-5 rounded-2xl mt-5">-</button>
      <button onClick={resetCounter1} className="bg-blue-400 p-5 rounded-2xl mt-5">reset</button>
    </div>
  )
}

export default Test