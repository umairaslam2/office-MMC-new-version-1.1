// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './authSlice';       // your auth slice
import doctorReducer from './doctorSlice';   // your doctor slice

// Persist config for user slice
const userPersistConfig = {
  key: 'user',
  version: 1,
  storage,
};

// Persist config for doctor slice
const doctorPersistConfig = {
  key: 'doctor',
  version: 1,
  storage,
};

// Create persisted reducers
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedDoctorReducer = persistReducer(doctorPersistConfig, doctorReducer);

// Combine reducers
const rootReducer = combineReducers({
  authSlice: persistedUserReducer,
  doctorSlice: persistedDoctorReducer,
});

// Create store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ⚠️ required for redux-persist
    }),
});

// Create persistor
let persistor = persistStore(store);

export { store, persistor };
