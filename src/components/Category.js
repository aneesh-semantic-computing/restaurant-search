import { FlatList, View } from "react-native";
import CategoryItem from "./CategoryItem";

export default function Category({ term, setTerm }) {
  const categories = [{
    name: "Burger",
    imageUrl: require('../../assets/images/burger.png')
  },{
    name: "Pizza",
    imageUrl: require('../../assets/images/pizza.png')
  },{
    name: "Desert",
    imageUrl: require('../../assets/images/cake.png')
  },{
    name: "Drink",
    imageUrl: require('../../assets/images/smoothies.png')
  },{
    name: "Steak",
    imageUrl: require('../../assets/images/steak.png')
  },{
    name: "Pasta",
    imageUrl: require('../../assets/images/pasta.png')
  },]
  return (
    <View>
      <FlatList
        data={categories}
        renderItem={
          ({ item, index }) => <CategoryItem
            name={item.name}
            imageUrl={item.imageUrl}
            index={index}
            active={item.name === term}
            setTerm={setTerm}
          /> 
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.name}
      />
    </View>
  );
}