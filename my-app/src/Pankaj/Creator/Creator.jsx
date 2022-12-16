
import React from 'react'
import { Readmore } from './Readmore';
import styles from "./Creator.module.css"

export const Creator = () => {
  return (
    <div>
        <div>
      <div className={styles.show} style={{color:'black'}}>
      <Readmore>
      Tripoto Family is a community of travel content creators who create stunning photo blogs, 
      engaging reels and videos as well as informative articles.
       Here are the most promising creators of the month who took us on a beautiful journey across
        India and the world through their content.
       Kudos to Tripoto's best creators for July 2022!
</Readmore>

        </div>  
        </div>
    </div>
  )
}
