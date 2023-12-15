// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import Header from './src/components/Header';
// import Search from './src/components/Search';
// import Category from './src/components/Category';
// import { useState } from 'react';
// import Restaurants from './src/components/Restaurants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/Home';
import RestaurantScreen from './src/screens/Restaurant';

export default function App() {
  // const [term, setTerm] = useState("Burger");
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Header />
    //   <Search setTerm={setTerm} />
    //   <Category setTerm={setTerm} term={term} />
    //   <Restaurants term={term} />
    //   <StatusBar />
    // </View>
  );
}
