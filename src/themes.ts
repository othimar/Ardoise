/**
 * Description: Theme of the code editor
 **/

import Default from './decorations/Default'
import OldWindows from './decorations/OldWindows'
import React from 'react'

// codeTheme is a highlight.js code theme
export type Theme = {
    name:string,
    component:({children}:{children:React.ReactNode})=>React.JSX.Element,
    backgroundColor: string,
    codeTheme: string
} 
    
const themes:Array<Theme> = [
  {
    name:"Default",
    component: Default,
    backgroundColor: "#333",
    codeTheme:"darcula"
  },
  {
    name: "Old Windows",
    component: OldWindows,
    backgroundColor: "white",
    codeTheme: "darcula"
  }
]

export default themes
