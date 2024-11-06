import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '../../app/store'

//This slice the state of all the modals in the application

type ModalsState = {
  value: {background: boolean, exportImg:boolean }
}

const initialState:ModalsState = {
  value: {background: false, exportImg: false}
}

const modalsSlice = createSlice({
  name:'modals',
  initialState,
  reducers:{
    openBackground: (state)=>{
      state.value.background = true
    },
    closeBackground: (state)=>{
      state.value.background = false
    },
    openExportImg: (state)=>{
      state.value.exportImg = true
    },
    closeExportImg: (state)=>{
      state.value.exportImg = false
    }
  }
})

export const {openBackground, closeBackground, openExportImg, closeExportImg} = modalsSlice.actions
export const selectModals = (state:RootState)=>state.modals.value
export default modalsSlice.reducer
