/**
 * description: A dropdow input to select the theme of the code editor
 **/

import React from 'react'
import styles from './SelectTheme.module.scss'

import {selectTheme, setTheme} from './features/theme/themeSlice'
import {useAppDispatch, useAppSelector} from './app/hooks'
import themes from './themes'

function SelectTheme(){
  const dispatch = useAppDispatch()
  const theme = useAppSelector(selectTheme)

  const onChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    const t = themes.filter( x => x.name == event.currentTarget.value )[0]
    dispatch( setTheme(t) )
  }
  
  return (
    <select className={styles.select} value={theme.name} onChange={onChange}>
    { themes.map( t => <option value={t.name}>{t.name}</option>) }
    </select>
  )
}

export default SelectTheme
