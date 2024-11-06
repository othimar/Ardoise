import React, {useState} from 'react'
import {setBackground} from './features/background/backgroundSlice'
import {selectModals} from './features/modals/modalsSlice.ts'

import {useAppDispatch, useAppSelector} from './app/hooks'

import {closeBackground} from './features/modals/modalsSlice.ts'

import Modal from './Modal.tsx'
import styles from './ModalBackground.module.scss'

const colorCSS = ({h, s, l}:Color)=>{
  return `hsl(${h}, ${s}%, ${l}%)`
}

/* Create a gradient*/
const createGradient = (color:Color)=>{
  return `linear-gradient(315deg, ${colorCSS(color)} 0%, #FFF 200% )`
}

type Color = {h:number, s:number, l:number}

/* The component to change the background color of the snippet*/
function ModalBackground(){
  const [color, setColor] = useState<Color>({h:75, s:50, l: 60})

  const dispatch = useAppDispatch()
  const modals = useAppSelector(selectModals)
  
  const handleChangeHue = (event: React.ChangeEvent<HTMLInputElement>) => setColor((prevColor) => {
      const h: number = +event.target.value
      const color:Color = {...prevColor, h}
      return color
  })

    const handleChangeSat = (event: React.ChangeEvent<HTMLInputElement>) => setColor((prevColor)=>{
    return {...prevColor, s: +event.target.value}
  })

    const handleChangeLight = (event:React.ChangeEvent<HTMLInputElement>) => setColor((prevColor)=>{
    return {...prevColor, l: +event.target.value}
  })
  
  const handleSave = ()=>{
    dispatch(setBackground(createGradient(color)))
    dispatch(closeBackground())
  }

  /*  Prevent the click from getting out of the container div
      Without it, when clicking on the container div, the click propagates to
      the modal container(the one in Modal component) and triggers a click event which close the modal
   */
  const captureClick = (event: React.MouseEvent<HTMLDivElement>)=>{
    event.stopPropagation()
  }
  
  return (
    <Modal open={modals.background}  handleClose={()=>dispatch(closeBackground())}>
    <div className={styles.container} onClick={captureClick}>
        <div className={styles.colorSample} style={{background:createGradient(color) }}/>
          <div className={styles.colorControlsContainer}>
	    <label>Teinte:</label>
	   <input type={"range"} min={0} max={360} value={color.h} onChange={handleChangeHue} />
	    <label>Saturation:</label>
	    <input type={"range"} min={0} max={100} value={color.s} onChange={handleChangeSat}/>
	    <label>Luminosité:</label>
	    <input type={"range"} min={0} max={100} value={color.l} onChange={handleChangeLight}/>
	  </div>
	  <button className={styles.btnSave} onClick={handleSave}>Change</button>
	  <button className={styles.btnCancel}>Cancel</button>
	</div>
      </Modal>
  )
}

export default ModalBackground
