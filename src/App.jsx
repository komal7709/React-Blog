import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {
  const { amount } = useSelector(arg => arg.account) // store.getstate
  const dispatch = useDispatch()
  const [inp, setInp] = useState(0)
  return <>
    <h1 style={{ color: "blue" }}>BALANCE: {amount}</h1>
    <input type="text" onChange={e => setInp(+e.target.value)} />
    <hr />
    <button style={{ color: "red" }} onClick={e => dispatch({ type: "DEPOSITE_MONEY", payload: inp })}>
      Add
    </button>
    <button style={{ color: "red" }} onClick={e => dispatch({ type: "WIDRAW_MONEY", payload: inp })}>
      widraw
    </button>
  </>
}

export default App