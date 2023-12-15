import { StyleSheet, TextInput, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { elevation } from "../common/styles";
import { useState } from "react";

export default function Search({ setTerm }) {
  const [input, setInput] = useState("");
  const handleSaveTerm = () => {
    if(!input) return;
    setTerm(input);
    setInput("");
  }
  return (
  <View style={[styles.container, styles.elevation]}>
    <FontAwesome name="search" size={25}/>
    <TextInput
      placeholder="Restaurants, food "
      value={input}
      style={styles.input}
      onChangeText={(text) => setInput(text)}
      onEndEditing={handleSaveTerm}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginHorizontal: 25,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 40
  },
  elevation,
  input: {
    fontSize: 20,
    marginLeft: 10,
  }
});
