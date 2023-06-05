import { createSlice } from '@reduxjs/toolkit';

const initialState={
    isFollowed: false,
}


const followSlice= createSlice({
    name: 'follow',
    initialState,
    reducers:{
        toggleFollow(state,action){

            const userId = action.payload;
            state[userId] = !state[userId];
        },
    },
});

export const { toggleFollow } = followSlice.actions;
export const followReducer = followSlice.reducer;