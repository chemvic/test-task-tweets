import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

 const baseURL = "https://64635cbe4dca1a66135b925a.mockapi.io";


export const fetchUsers = createAsyncThunk("users/fetchAll", async (currentLimit, thunkAPI) => {
  try {
  
     

    const url =`${baseURL}/users?page=1&limit=${currentLimit}`;


     const response = await axios.get(url);
      return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } 
});

export const updateUser = createAsyncThunk("users/updateUser ", async ({id,updatedFollowers,updatedIsFollowed }, thunkAPI) => {

  try {

    const url =`${baseURL}/users/${id}`;
     const response = await axios.put(url, {followers:updatedFollowers,isFollowed:updatedIsFollowed });
      return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  } 
});
