/**
 *Description: A Modal Box Component
 */

import React from 'react'

import styles from './Modal.module.scss'

export type propsType= {
  open:boolean, //The state of the box open or not
    handleClose:()=>void, //The closing function
    children: React.JSX.Element  //The Content of the modal box
}

function Modal({open, handleClose, children}:propsType){
    const handleKey = (event:React.KeyboardEvent)=>{
    // event.preventDefault()
    const key = event.key;
    if(key == 'Escape'){
      handleClose()
    } 
  }

  return(
    <div className={styles.container} style={{visibility: open ? "visible":"hidden"}}  onClick={handleClose}  onKeyDown={handleKey} tabIndex={0} >
        {children}
    </div>
  )
}

export default Modal
