import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { elevation } from "../common/styles";

export default function RestaurantItem({ restaurant }) {
  return (
    <View style={[styles.container, styles.elevation]}>
      <Image style={styles.image} source={restaurant.image_url ? { uri: restaurant.image_url} : require("../../assets/images/food-plate.jpg") } />
      <View style={styles.infoContainer}>
        <Text style={styles.header}>{restaurant.name}</Text>
        <View style={styles.info}>
          <Text style={styles.rating}>{restaurant.rating} stars</Text>
          <Text style={styles.money}>{restaurant.price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 100,
    borderRadius: 20,
    backgroundColor: "white",
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  elevation,
  image: {
    width: 75,
    height: 75,
    borderRadius: 400,
    marginLeft: 10,
  },
  infoContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    fontWeight: "bold",
    flexDirection: "row",
  },
  rating: {
    marginRight: 20,
  },
  money: {
    color: "gold",
  },
});