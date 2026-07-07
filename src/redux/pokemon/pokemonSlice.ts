import { createSlice } from "@reduxjs/toolkit";
import { fetchPokemon } from "./pokemonThunks";

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  pokemon: Pokemon[];

  loading: boolean;

  error: string | null;

  currentPage: number;

  totalPages: number;
}

const initialState: PokemonState = {
  pokemon: [],

  loading: false,

  error: null,

  currentPage: 1,

  totalPages: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",

  initialState,

  reducers: {
    changePage(state, action) {
      state.currentPage = action.payload;
    },
  },

  extraReducers(builder) {
    builder

      .addCase(fetchPokemon.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.loading = false;

        state.pokemon = action.payload.results;

        state.currentPage = action.payload.page;

        state.totalPages = Math.ceil(action.payload.count / 20);
      })

      .addCase(fetchPokemon.rejected, (state) => {
        state.loading = false;

        state.error = "Failed to load Pokemon";
      });
  },
});

export const { changePage } = pokemonSlice.actions;

export default pokemonSlice.reducer;
