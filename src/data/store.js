import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        someReducer: rootReducer,
        newReducer: rootReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    }
);

export default store;