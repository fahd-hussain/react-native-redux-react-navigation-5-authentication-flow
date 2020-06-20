import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;

const styles = StyleSheet.create({
    drawerStyle: {
        // backgroundColor: 'black',
        width: (width * 3) / 4,
    },
    tabIcon: {
        // paddingLeft: 10
    },
})

export default styles