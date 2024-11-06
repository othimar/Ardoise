import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'
import BackgroundColors from '../../backgroundColors'

interface BackgroundStyle{
  value: {background: string}
}

const initialState:BackgroundStyle = {
  value: BackgroundColors.pink
}

const backgroundSlice = createSlice({
  name: 'background',
  initialState,
  reducers:{
    setBackground: (state, action:PayloadAction<string>)=>{
      state.value = {background: action.payload}
    }
  }
})

export const {setBackground} = backgroundSlice.actions
export const selectBackground = (state:RootState) => state.background.value
export default backgroundSlice.reducer
