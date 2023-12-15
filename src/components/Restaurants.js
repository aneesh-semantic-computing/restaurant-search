import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect } from "react"
import useRestaurants from "../hooks/useRestaurants";
// import { withNavigation } from "@react-navigation/native";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({term, navigation}){
  const [{ data, error, loading } , searchRestaurants] = useRestaurants();
  
  useEffect(() => {
    searchRestaurants(term);
  },[term])

  if (loading) return <ActivityIndicator size="large" marginVertical={30} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Restaurants</Text>
      <FlatList
        data={data}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Restaurant", { id: item.id })}
          >
            <RestaurantItem restaurant={item} />
            </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    // flex: 1,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
});
