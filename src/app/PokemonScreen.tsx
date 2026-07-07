// import { useEffect } from "react";
// import {
//   ActivityIndicator,
//   FlatList,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";

// import { Colors } from "../demoData/colorCodes";

// import { useAppDispatch, useAppSelector } from "@/redux/hooks";
// import { nextPage } from "@/redux/pokemon/pokemonSlice";
// import { fetchPokemon } from "@/redux/pokemon/pokemonThunks";

// export default function PokemonScreen() {
//   const dispatch = useAppDispatch();

//   const { pokemon, loading, error, page, hasMore } = useAppSelector(
//     (state) => state.pokemon,
//   );

//   useEffect(() => {
//     if (pokemon.length === 0) {
//       dispatch(fetchPokemon(0));
//     }
//   }, []);

//   const loadMore = () => {
//     if (!loading && hasMore) {
//       const next = page + 1;

//       dispatch(nextPage());
//       dispatch(fetchPokemon(next));
//     }
//   };

//   if (loading && pokemon.length === 0) {
//     return (
//       <View style={styles.center}>
//         <ActivityIndicator size="large" />
//         <Text>Loading Pokémon...</Text>
//       </View>
//     );
//   }

//   if (error) {
//     return (
//       <View style={styles.center}>
//         <Text>{error}</Text>
//       </View>
//     );
//   }

//   return (
//     <FlatList
//       data={pokemon}
//       keyExtractor={(item) => item.name}
//       renderItem={({ item }) => (
//         <View style={styles.card}>
//           <Text style={styles.name}>
//             {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
//           </Text>
//         </View>
//       )}
//       onEndReached={loadMore}
//       onEndReachedThreshold={0.5}
//       ListFooterComponent={
//         loading ? <ActivityIndicator style={{ marginVertical: 20 }} /> : null
//       }
//     />
//   );
// }

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   card: {
//     margin: 10,
//     padding: 18,
//     borderRadius: 12,
//     backgroundColor: Colors.secondary,
//   },

//   name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     textTransform: "capitalize",
//   },
// });

import { useEffect } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

import Pagination from "@/components/Pagination";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { changePage } from "@/redux/pokemon/pokemonSlice";

import { fetchPokemon } from "@/redux/pokemon/pokemonThunks";

export default function PokemonScreen() {
  const dispatch = useAppDispatch();

  const { pokemon, loading, error, currentPage, totalPages } = useAppSelector(
    (state) => state.pokemon,
  );

  useEffect(() => {
    dispatch(fetchPokemon(1));
  }, []);

  function handlePageChange(page: number) {
    dispatch(changePage(page));

    dispatch(fetchPokemon(page));
  }

  return (
    <View style={{ flex: 1 }}>
      {loading && <ActivityIndicator size="large" />}

      {error && <Text>{error}</Text>}

      <FlatList
        data={pokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => (
          <View
            style={{
              padding: 20,
              margin: 10,
              backgroundColor: "#eee",
              borderRadius: 10,
            }}
          >
            <Text>
              {" "}
              {index + 1}. {item.name}
            </Text>
          </View>
        )}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </View>
  );
}
