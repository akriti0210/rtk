import { createSlice } from "@reduxjs/toolkit"
import { reset } from "../actions"

const songsSlice = createSlice({
    name: 'song',
    initialState:[],
    reducers: {
        addSong(state, action) {
            // directly updating state through immer
            // rtk automatically provides immer
            state.push(action.payload)  
        },
        removeSong(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index,1)
        },
        // whenever slice is created by rtk
        // extraReducers will be called automatically
        // and given the builder object
        // builder object- to tell combined reducer to watch
        // some additional action types
        // extraReducers(builder) {
        //     builder.addCase('movie/reset', (state,action) => {
        //         return []
        //     })
        // }
        // or
        // extraReducers(builder) {
        //     builder.addCase(moviesSlice.actions.reset.toString(), (state,action) => {
        //         return []
        //     })
        // }
        extraReducers(builder) {
            builder.addCase(reset, (state,action) => {
                return []
            })
        }
    }
}, 1)

export const { addSong, removeSong } = songsSlice.actions
export const songsReducer = songsSlice.reducer
