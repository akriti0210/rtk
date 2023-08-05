import { configureStore } from '@reduxjs/toolkit'
import { songsReducer, addSong, removeSong } from './slices/songsSlice'
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice'
import { reset } from './actions'

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
})

// connect slice with store
// const store = configureStore({
//     reducer: {
//         songs: songsSlice.reducer,
//         movies: moviesSlice.reducer
//     }
// })
// console.log(store.getState())
// console.log(songsSlice.actions.addSong('New song'))
/*
const startingState = store.getState()
console.log(JSON.stringify(startingState))

// don't do this
// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New Song'
// })

// instead do this
store.dispatch(
    songsSlice.actions.addSong('New song')
)

const finalState = store.getState()
console.log(JSON.stringify(finalState))
*/

export { store }
export { addSong, removeSong, addMovie, removeMovie }
export { reset }