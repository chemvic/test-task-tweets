import { createSlice } from '@reduxjs/toolkit';
import {fetchUsers, updateUser} from "redux/users/operations";

const initialState={     
      items: [],
      isFollowed:false,
      isLoading: false,
      error: null
  };
   const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;    
  };

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeFollowers(state, action) {
          const { id, followers } = action.payload;
          const index = state.items.findIndex((user) => user.id === id);
          if (index !== -1) {
            state.items[index].followers = followers;
          }
        },
      }, 
    extraReducers: (builder) =>{
      builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, (state, action)=>{
        state.isLoading=false;
        state.items=action.payload;
        state.error=null;
      })
      .addCase(updateUser.rejected, handleRejected)
      .addCase(updateUser.pending, handlePending)
      .addCase(updateUser.fulfilled, (state, action)=>{
        state.isLoading=false;
        const index = state.items.findIndex((user) => user.id === action.meta.arg);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.error=null;
      })  
    }
  });
  export const { changeFollowers } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
