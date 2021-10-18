import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function CategoryMenu(props) {

    return(
        <View style={styles.screen}> 
            <Text>This is CategoryMenu Screen</Text>  
            <Text>{props.route.params.catTitle}</Text>
            <Button title= "Go to third" onPress={() => props.navigation.navigate("Third")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default CategoryMenu;