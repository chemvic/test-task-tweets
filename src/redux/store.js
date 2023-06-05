import { configureStore } from "@reduxjs/toolkit";
import {followReducer} from "./following/followSlice";
import {usersReducer} from "./users/usersSlice";
import {currentLimitReducer} from "./currentLimit/currentLimitSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  
  import storage from 'redux-persist/lib/storage';
  
const followPersistConfig = {
    key: 'follow',
    storage,
};
// const usersPersistConfig = {
//     key: 'users',
//     storage,
// };
const currentLimitPersistConfig = {
    key: 'currentLimit',
    storage,
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currentLimit: persistReducer(currentLimitPersistConfig, currentLimitReducer),
    follow: persistReducer(followPersistConfig, followReducer),
     

},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }},)
    

});
export const persistor = persistStore(store);




  
 
  