import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
import { childrenReducer } from './child/childSlice';
import { teachersReducer } from './teacher/teacherSlice';
import { lessonReducer } from './Lesson/lessonSlice';
import { officesReducer } from './offices/officesSlice';
import { smsReducer } from './sms/smsSlice';
import { expenseReducer } from './expense/expenseSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    children: childrenReducer,
    teachers: teachersReducer,
    lesson: lessonReducer,
    offices: officesReducer,
    sendSms: smsReducer,
    expense: expenseReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
