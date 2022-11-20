import React, { createContext, useState } from 'react'
import AxiosFunctional from './AxiosFunctional'

export const textcotext = createContext()
export default function Value() {
    let [inp1, setInp1] = useState("")
    let [inp2, setInp2] = useState("")
    let [inp3, setInp3] = useState("")

    function Inp1(e) {
        setInp1(e.target.value)
        e.preventDefault();
    }
    function Inp2(e) {
        setInp2(e.target.value)
        e.preventDefault();
    }
    function Inp3(e) {
        setInp3(e.target.value)
        e.preventDefault();
    }
    
  return (
    <textcotext.Provider value={{inp1, inp2, inp3}}>
        <div className='container my-5'>
        <form className='row border border-dark rounded'>
                    <input type="text" className="form-control col m-2" onChange={(e) => Inp1(e)} placeholder="enter your name" />
                    <input type="text" className="form-control col m-2" onChange={(e) => Inp2(e)} placeholder="enter userID" />
                    <input type="text" className="form-control col m-2" onChange={(e) => Inp3(e)} placeholder="enter address" />
                    
                </form>
        <AxiosFunctional />
        </div>
    </textcotext.Provider>
  )
}
