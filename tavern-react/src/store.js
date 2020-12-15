import { configureStore, createSlice } from '@reduxjs/toolkit';

const localAccountSlice = createSlice({
    name: 'localAccount',
    initialState: {
        localAccount: null //Change to getting from cookie
    }, 
    reducers: {
        signIn: (state, action) => {

        },
        signOut: state => {

        },
        createAccount: (state, action) => {

        }
    }
})

const store = configureStore({
    reducer: {
        localAccount: localAccountSlice.reducer
    }
});

export default store;