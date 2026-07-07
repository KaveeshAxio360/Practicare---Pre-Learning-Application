import axios from "axios";

export const jsonPlaceholderApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
