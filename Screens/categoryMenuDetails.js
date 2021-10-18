import React from "react";
import { View, Text, StyleSheet, Button} from "react-native";

function CategoryMenuDetails(props) {
    return(
        <View style={styles.screen}>
            <Text> 
                This is categoryMenuDetails Screen
            </Text>
            <Button title= "Go to First" onPress={() => props.navigation.popToTop("First")}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default CategoryMenuDetails;