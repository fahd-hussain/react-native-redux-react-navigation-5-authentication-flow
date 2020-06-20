import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    drawerContentIcon: {
        // paddingLeft: 10
    },
    drawerContentTitle: {
        // paddingLeft: 10
    }
})

export default styles

// style={{ paddingLeft: 10 }}