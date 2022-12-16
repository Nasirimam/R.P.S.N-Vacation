import React, { useState } from 'react'
import styles from "./Creator.module.css"

export const Readmore = ({children}) => {
    const [show, setShow] = useState(false);
    const toggle = () => {
      setShow(show => !show)
    }
  return (
    <div>
        <div>
            {show ? children : children.substr(0,320)}
        </div>
        <div>
          {!show ? <button onClick={toggle} className={styles.btn}>Show more {" "}
          <i class="fa-solid fa-caret-down"></i>
          </button> : "" }
          
        </div>
    </div>
  )
}
