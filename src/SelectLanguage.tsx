import React from 'react'
import styles from './SelectLanguage.module.scss'
import languages from './features/language/languages'
import {useAppSelector, useAppDispatch} from './app/hooks'
import {selectLanguage, changeLanguage} from './features/language/languageSlice'

function SelectLanguage(){
  const language = useAppSelector(selectLanguage)
  const dispatch = useAppDispatch()

  const onChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    const langId = event.target.value
    const name = languages.filter( x => x.id == langId)[0].name
    dispatch( changeLanguage({name, id:langId}) )
  }
  
  return (
    <select onChange={onChange} value={language.id} className={styles.select}>
    { languages.map( lang => <option value={lang.id} className={styles.option}>{lang.name}</option>) }
    </select>
  )
}

export default SelectLanguage;
