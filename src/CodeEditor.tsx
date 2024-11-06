import {selectTheme} from './features/theme/themeSlice.ts'
import {useAppSelector} from './app/hooks'
import React from 'react'

import CodeInput from './components/CodeInput'

type propsType = {
  code:string,
  handleChangeCode:(event: React.ChangeEvent<HTMLTextAreaElement>)=>void,
}


function CodeEditor({code, handleChangeCode}:propsType){
  const theme = useAppSelector(selectTheme)
  const Container = theme.component
  return (
    /*the id code is used by html-to-image to export de code as an image*/
    <div id={"code"}>
      <Container>
        <CodeInput code={code} onChangeCode={handleChangeCode} language={"rust"}/>
      </Container>
    </div>
  )
}

export default CodeEditor;
