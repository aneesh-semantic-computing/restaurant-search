import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { elevation } from "../common/styles";

export default function CategoryItem({ name, imageUrl, index, active, setTerm }) {
  return (
    <TouchableOpacity onPress={() => setTerm(name)}>
      <View
        style={[
          styles.container,
          styles.elevation,
          index === 0 ? {marginLeft: 25} : {marginLeft: 15},
          active ? { backgroundColor: "rgb(241, 186, 87)" } : { backgroundColor: "white" }
        ]}
      >
        <View style={styles.imageContainer}>
          <Image source={imageUrl} style={styles.image} />
        </View>
        <Text style={styles.header}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },
  elevation,
  image: {
    height: 35,
    width: 35
  },
  imageContainer: {
    width:50,
    height:50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginBottom: 5
  },
  header: {
    fontWeight: "bold"
  }
})