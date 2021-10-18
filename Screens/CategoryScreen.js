import React from "react";
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import Categories from "../CategoriesList";


function CategoryScreen(props) {
    console.log(props)
    
    function items(item) {
        return(
            <TouchableOpacity onPress={() => props.navigation.navigate("Second", {catTitle: item.item.title})} style= {styles.screen}>
                <View> 
                    <Text>{item.item.title}</Text>
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
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    }
})

export default CategoryScreen;