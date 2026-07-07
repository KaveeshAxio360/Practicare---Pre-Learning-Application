import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonApi } from "../../services/api";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (page: number = 1) => {
    const limit = 20;

    const offset = (page - 1) * limit;

    const response = await pokemonApi.get(
      `/pokemon?limit=${limit}&offset=${offset}`,
    );

    return {
      results: response.data.results,
      count: response.data.count,
      page,
    };
  },
);
