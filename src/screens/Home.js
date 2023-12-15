import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Category from '../components/Category';
import Restaurants from '../components/Restaurants';

export default function HomeScreen({ navigation }) {
  const [term, setTerm] = useState("Burger");
  return (
    <View style={styles.container}>
      <Header />
      <Search setTerm={setTerm} />
      <Category setTerm={setTerm} term={term} />
      <Restaurants term={term} navigation={navigation} />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(253,253,253)",
  }
});
