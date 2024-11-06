import React from 'react'
import {useAppDispatch} from './app/hooks'
import {openBackground} from './features/modals/modalsSlice'
import SelectTheme from './SelectTheme'

import './Footer.module.scss'
import styles from './Footer.module.scss'

import SelectLanguage from './SelectLanguage'

function Footer():React.JSX.Element{
  const dispatch = useAppDispatch()
  
  return (
    <footer className={styles.footer}>
    <button className={styles.button}  onClick={()=>dispatch(openBackground())}> Background </button>
      <SelectLanguage />
      <SelectTheme />
    </footer>
  )
}

export default Footer
