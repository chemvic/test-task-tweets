import { createSlice } from '@reduxjs/toolkit';

const initialState={
    limit: 3,
};

const currentLimitSlice= createSlice({
    name:'currentLimit',
    initialState,
    reducers:{
        incrementLimit(state){
            state.limit+=3;
        },
        resetLimit(state){
            state.limit=3;
        }

    }
});
export const { incrementLimit, resetLimit } = currentLimitSlice.actions;
export const currentLimitReducer = currentLimitSlice.reducer;