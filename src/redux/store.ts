import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemon/pokemonSlice";
import usersReducer from "./users/usersSlice";

// export const store = configureStore({
//   reducer: {
//     users: usersReducer,
//     pokemon: pokemonReducer,
//   },
// });

const rootReducer = combineReducers({
  users: usersReducer,
  pokemon: pokemonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
