import { configureStore } from "@reduxjs/toolkit";
import {filtersReducer} from "./filters/filtersSlice";
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
  
const currentLimitPersistConfig = {
    key: 'currentLimit',
    storage,
};

export const store = configureStore({
  reducer: {
    users: usersReducer,
    currentLimit: persistReducer(currentLimitPersistConfig, currentLimitReducer),
    filters: filtersReducer,    

},
middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }},)
    

});
export const persistor = persistStore(store);




  
 
  