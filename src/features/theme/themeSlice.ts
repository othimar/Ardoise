/**
 * Description: This file manage the theme of the code editor
 **/

import {RootState} from '../../app/store'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import themes, {Theme} from '../../themes'

const initialState:{value:Theme} = {
  value: themes[0]
}

const themeSlice = createSlice({
  name:"theme",
  initialState,
  reducers:{
    setTheme: (state:{value:Theme}, action:PayloadAction<Theme>) => {
      state.value = action.payload
    }
  },
})

export const {setTheme} = themeSlice.actions
export const selectTheme = (state:RootState) => state.theme.value
export default themeSlice.reducer


