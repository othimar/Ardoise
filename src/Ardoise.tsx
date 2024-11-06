//React
import React, {useState} from 'react'

//redux
import {useAppSelector} from './app/hooks.ts'
import {selectBackground} from './features/background/backgroundSlice.ts'

import styles from './Ardoise.module.scss'

import BColors from "./backgroundColors.ts"

import ModalExport from './ModalExport'

import NavBar from './NavBar'
import CodeEditor from './CodeEditor'
import Footer from './Footer'
import ModalBackground from './ModalBackground'

//State Type Definition
type EditorState = {
  code: string,
  language: string,
  backgroundStyle: {
    background: string
  }
}


function Ardoise(){
  const initialState = {
    code: `let mut x:i32 = 20`,
    language: "rust",
    backgroundStyle: BColors.grey,
  }

  //The background Style
  const background = useAppSelector(selectBackground)
  
  const [editorState, setEditorState] = useState<EditorState>(initialState);
  
    const handleChangeCode = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setEditorState( prevState =>{
      const code:string = event.currentTarget.value;
      return {code, language:prevState.language, backgroundStyle: {...prevState.backgroundStyle} }
    })
  }
  
  return (
    <div className={styles.container}>
      <NavBar/>
      <main className={styles.main}>
        
        <div className={styles.application} style={background} >
	   <CodeEditor  code={editorState.code} handleChangeCode={handleChangeCode} /> 
        </div> 
        <ModalExport/>
	<ModalBackground />
       </main>
       <Footer/>
       
    </div>
  )
}

export default Ardoise;
