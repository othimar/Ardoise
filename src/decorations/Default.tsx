/**
 * @description: A common theme found in many snippet edditor
 **/

import React from 'react'
import styles from './Default.module.scss'


//Window decoration params
const buttonRadius:number = 6;
const buttonCy:number = 12;


type propsType = {
  children: React.ReactNode
}

export default function Default({children}:propsType){
  import("highlight.js/styles/github-dark.min.css")
  return (
    <div className={styles.container} style={{color: "white"}}>
      <svg className={styles.buttonsDecoration} width={"80px"} height={"30px"}>
          <circle cx={12} cy={buttonCy} r={buttonRadius} fill={"#BA3A30"}/>
	  <circle cx={30} cy={buttonCy} r={buttonRadius} fill={"#d5ab22"}/>
	  <circle cx={48} cy={buttonCy} r={buttonRadius} fill={"#208A20"}/>
	</svg>
	<div className={styles.code}>{children}</div>
     </div>
  )
}
