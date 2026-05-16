import {create} from "zustand"

// create store (useCounterStore hook)
export const useCounterStore = create((set)=>({
    // state

    // add user state with properties : name, age, email
    user : {name : "Samanvi", email : "samanvi@mail.com", age : 18},
    // function to change email
    // ### The entire object replaces with the new object so, we send the copy before. ###
    changeEmail : ()=>set({...user,email : "samanvigajawada@mail.com"}),
    // function to change name and age
    changeNameAge : ()=>set({...user,name : "Sanjana",age : 20}),

    newCounter : 0,
    newCounter1 : 100,
    // functions to modify the state
    incrementCounter : ()=>set(state=>({newCounter : state.newCounter+1})),
    incrementCounter1 : ()=>set(state=>({newCounter1 : state.newCounter1+1})),
    decrementCounter : ()=>set(state=>({newCounter : state.newCounter-1})),
    decrementCounter1 : ()=>set(state=>({newCounter1 : state.newCounter1-1})),
    resetCounter : ()=>set({newCounter : 0}),
    resetCounter1 : ()=>set({newCounter1:0}),
    //function to change newCounter to 500
    changeCounter : ()=>set({newCounter:500}),
    // function to decrement newCounter1 by 20
    decrementCounter1ByTwenty : ()=>set(state=>({newCounter1 : state.newCounter1-20}))
}))