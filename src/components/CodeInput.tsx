/**
 *@description: This is a textarea with syntactic coloration
 **/

import React, {useState, useEffect} from 'react'
import hljs from 'highlight.js'

import {useAppSelector} from '../app/hooks.ts'
import {selectLanguage} from '../features/language/languageSlice'
import styles from  './CodeInput.module.scss'

//The state is controlled
type propsType = {
  code: string,
  onChangeCode: (event:React.ChangeEvent<HTMLTextAreaElement>)=>void,
  language: string
}


function getHighlightedCode(code:string, language:string):string{
  if(language == 'auto'){
    return hljs.highlightAuto(code +"\n ").value
  } else{
    return hljs.highlight(code + "\n ", {language: language} ).value
  }
}

function CodeInput({code, onChangeCode}:propsType){
  const [innerCode, setInnerCode] = useState<string>(code)
  const [highlightedCode, setHighlightedCode] = useState<string>('')

  const language = useAppSelector(selectLanguage)
  
  const handleChangeInnerCode = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setInnerCode(()=>event.target.value)
    onChangeCode(event)
  }

  useEffect(()=>{
    setHighlightedCode(()=>getHighlightedCode(innerCode, language.id))
  },[innerCode, language])
  
  return (
     <div style={{position:"relative"}}>
       <code className={styles.code} dangerouslySetInnerHTML={{__html:  highlightedCode }}/>	    
       <textarea className={styles.textCode}  onChange={handleChangeInnerCode}>{innerCode}</textarea>
     </div> 
  )
}

export default CodeInput
