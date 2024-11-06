/**
 * programming language of the snippet
 */

import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'

import languages, {Language} from './languages.ts'

const initialState:{value:Language} = {
  value: languages[1]
}

const langSlice = createSlice({
  name:'language',
  initialState,
  reducers:{
    changeLanguage: (state, action:PayloadAction<Language>)=>{
      state.value = action.payload
    }
  }
})

export const {changeLanguage} = langSlice.actions
export const selectLanguage = (state:RootState)=>state.language.value
export default langSlice.reducer
