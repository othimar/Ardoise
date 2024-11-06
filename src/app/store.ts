import {configureStore} from '@reduxjs/toolkit'
import backgroundReducer from '../features/background/backgroundSlice.ts'
import modalsReducer from '../features/modals/modalsSlice.ts'
import themeReducer from '../features/theme/themeSlice.ts'
import langReducer from '../features/language/languageSlice.ts'

const store = configureStore({
  reducer: {
    background: backgroundReducer,
    modals: modalsReducer,
    theme: themeReducer,
    language: langReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
