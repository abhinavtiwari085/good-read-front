import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSliceReducer from 'Redux/Slices/AuthSlice';
import bookSliceReducer from 'Redux/Slices/BookSlice';
import shelfSliceReducer from 'Redux/Slices/ShelfSlice';
export default configureStore({
    reducer: {
        auth: authSliceReducer,
        book: bookSliceReducer,
        shelf: shelfSliceReducer
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});

//Redux store can be extended with middleware to add custom functionality.

//A slice in Redux Toolkit combines reducers and action creators into a single file. It defines how the state can be updated in response to actions.

// Reducers are pure functions, meaning they should not mutate the state directly, but instead return a new state object if the state changes.
//Reducers, as the name suggests, take in two things: previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state.

//ui->action->reducer->store->ui