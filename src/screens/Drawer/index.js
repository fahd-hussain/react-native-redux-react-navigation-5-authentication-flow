import React, { Component } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body } from "native-base";

import styles from "./styles";

const DrawerItems = [
    {
        title: "Home",
        routeName: "Home",
        iconName: "home",
    },
    {
        title: "Share",
        routeName: "Share",
        iconName: "share",
    },
    {
        title: "Settings",
        routeName: "Profile",
        iconName: "cog",
    },
];

export class Drawer extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View>
                    <Text>Hello Drawer</Text>
                </View>
                <List
                    dataArray={DrawerItems}
                    keyExtractor={(element) => element.title}
                    renderRow={(element) => (
                        <ListItem icon onPress={() => console.log(`${element.title} is pressed`)}>
                            <Left>
                                <Icon style={styles.drawerContentIcon} type="FontAwesome" name={element.iconName} />
                            </Left>
                            <Body>
                                <Text style={styles.drawerContentTitle}>{element.title}</Text>
                            </Body>
                        </ListItem>
                    )}
                />
                <List>
                    <ListItem 
                        icon
                        onPress={() => console.log("Logout is pressed")}>
                        <Left>
                            <Icon style={styles.drawerContentIcon} type="FontAwesome" name="sign-out" />
                        </Left>
                        <Body>
                            <Text style={styles.drawerContentTitle}>LOGOUT</Text>
                        </Body>
                    </ListItem>
                </List>
            </SafeAreaView>
        );
    }
}

export default Drawer;
