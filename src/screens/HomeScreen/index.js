import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from './styles'

export class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Home Screen </Text>
            </View>
        )
    }
}

export default HomeScreen
