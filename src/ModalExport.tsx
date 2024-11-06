import React from 'react'
import {toPng} from 'html-to-image'

import {selectBackground} from "./features/background/backgroundSlice.ts"
import {closeExportImg, selectModals} from "./features/modals/modalsSlice.ts"
import {useAppSelector} from "./app/hooks.ts"
import {useAppDispatch} from "./app/hooks.ts"

import styles from './ModalExport.module.scss'
import Modal  from './Modal'


async function saveImage(width:number = 512, height:number = 512,
  background="#ABC",
  padding:number= 16) {

  try{
    const div = document.createElement('div')
    const data = await toPng(document.getElementById("code")!, {pixelRatio: 3})
    
    const img = document.createElement('img')
    img.src = data
    img.style.display = "inline-block"
    img.style.borderRadius = "6px"
    img.style.boxShadow = "16px 12px 4px 4px rgba(20,20,20, 0.4)"
    img.style.maxWidth="100%";
    img.style.maxHeight="100%"
    
    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
    div.style.width = width + "px"
    div.style.height = height + "px"
    div.style.padding = padding + "px"
    div.style.background = background
    div.style.boxSizing = "border-box"
    div.appendChild(img)
    
    document.body.appendChild(div)
    const output = await toPng(div, {pixelRatio:1, width, height})
    document.body.removeChild(div)
    
    const link = document.createElement('a')
    link.href = output
    link.download = "code.png"
    link.click()
  }catch(e){
    if (e instanceof Error){
      alert(e.message)
    }
  }
}

function ModalExport(){

  const {background} = useAppSelector(selectBackground)
  const {exportImg} = useAppSelector(selectModals)

  const dispatch = useAppDispatch()
  
    const handleSquare= (event:React.MouseEvent<HTMLButtonElement>)=>{
    try{
      event.stopPropagation()
      saveImage(1080, 1080, background, 64)
      dispatch(closeExportImg())
    }catch(e){
      if (e instanceof Error){
	alert(e.message)
      }
    }
  }

    const handlePortrait = (event:React.MouseEvent<HTMLButtonElement>)=>{
    event.stopPropagation()
    saveImage(1080, 1350, background, 64)
    dispatch(closeExportImg())
  }

  const handleLandscape = (event: React.MouseEvent<HTMLButtonElement>)=>{
    event.stopPropagation()
    saveImage(1600, 900, background, 64)
    dispatch(closeExportImg())
  }
  
  return (
    <Modal handleClose={()=>dispatch(closeExportImg())}  open={exportImg}>
      <div className={styles.container}>
        <button onClick={handleSquare} className={styles.button}>{"Carré"}</button>
        <button onClick={handleLandscape} className={styles.button}>{"Paysage"}</button>
        <button onClick={handlePortrait} className={styles.button}>{"Portrait"}</button>
      </div>
    </Modal>
  )
}

export default ModalExport
