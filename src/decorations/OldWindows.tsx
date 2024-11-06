/**
 *@description: This compoenent add a Windows NT-like look and feel to the code
 **/

import React from 'react'
import styles from './OldWindows.module.scss'

type propsType = {children:React.ReactNode}
function OldWindows({children}:propsType){
  import("highlight.js/styles/github.min.css")
  return (
    <div className={styles.container}>
      <div className={styles.appBar}>
        <div className={styles.buttonClose}>X</div>
      </div>
      <div className={styles.code}>{children}</div>
    </div>
  )
}

export default OldWindows
