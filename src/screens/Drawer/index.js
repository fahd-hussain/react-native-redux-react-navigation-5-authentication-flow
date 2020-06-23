import React, { Component, useContext } from "react";
// import { useDispatch, useSelector } from 'react-redux'
import { View, SafeAreaView, ScrollView } from "react-native";
import { List, ListItem, Text, Icon, Left, Body } from "native-base";

import styles from "./styles";
import { AuthContext } from '../../utils/authContext'

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

const Drawer = () => {
    const { logout } = useContext(AuthContext)
    
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
                <ListItem icon onPress={() => logout()}>
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
};

export default Drawer;
