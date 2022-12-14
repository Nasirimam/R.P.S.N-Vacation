import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ShowContext = createContext()
function ShowContextProvider({ children }) {

  const [show, setShow] = useState(false)

  return (
    <ShowContext.Provider value={{ show, setShow }}>

      {children}
    </ShowContext.Provider>
  )
}

export default ShowContextProvider