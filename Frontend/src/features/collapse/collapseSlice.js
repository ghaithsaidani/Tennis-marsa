import { createSlice } from '@reduxjs/toolkit'

export const collapseSlice = createSlice({
    name: 'collapsed',
    initialState: {
        value: false,
    },
    reducers: {
        handleChange:(state)=> {
            state.value=!state.value
        },
        setFalse:(state)=>{
            state.value=false
        }

    },
})
export const selectCollapse = (state) => state.collapsed.value
export const { handleChange,setFalse } = collapseSlice.actions

export default collapseSlice.reducer