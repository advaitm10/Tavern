import { configureStore, createSlice } from '@reduxjs/toolkit';

const localAccountSlice = createSlice({
    name: 'localAccount',
    initialState: {
        localAccount: null //Change to getting from cookie
    }, 
    reducers: {
        signIn: (state, action) => {
            state.localAccount = action.payload;
        },
        signOut: state => {
            state.localAccount = null;
        }
    }
})

const roomAccountSlice = creatSlice({
    name: 'roomAccounts',
    initialState: {
        accounts: null
    }, //Change to get accounts from server
    reducers: {
        refreshAccounts: state => {
            //Change to get accounts from server
        },
        clearAccount: state => {
            state.accounts = null;
        }
    }
})

const generalChatSlice = createSlice({
    name: 'generalChat',
    initalState: {
        chat: null //Get from server
    },
    reducers: {
        addChat: (state, action) => {

        },
        clearChat: state => {
            state.chat = null;
        }
    }
})

const store = configureStore({
    reducer: {
        localAccount: localAccountSlice.reducer,
        roomAccounts: roomAccountSlice.reducer
    }
});

export default store;