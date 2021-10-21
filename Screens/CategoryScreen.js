import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import { Categories } from "../CategoriesList";


function CategoryScreen(props) {
    
    function items(item) {
        return(
        <TouchableOpacity activeOpacity={0.9} onPress={() => props.navigation.navigate("Second", {catTitle: item.item.title, catId: item.item.id})} style= {{...styles.screen, backgroundColor: item.item.color}}>
            <View>
                <Text style={styles.text}>{item.item.title}</Text>
            </View>
        </TouchableOpacity>
        )
    }

    return(
        <FlatList 
            numColumns= {2}
            data= {Categories}
            renderItem= {items}
        />
    )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: 150,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    margin: 15,
    padding: 20,
    borderRadius: 20
  },
  text: {
    fontSize: 20,
    fontFamily: "open-sans-bold"
  },
});

export default CategoryScreen;