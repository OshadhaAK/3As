import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

export default class SideBar extends React.Component {
    render() {
        return (
            <ScrollView>
                <ImageBackground
                    source={require("../assets/sidebar_bg.jpg")}
                    style={{ width: undefined, padding: 16, paddingTop: 48 }}
                >
                    <Image source={require('../assets/dp.jpg')} style={styles.profile} />
                    <Text style={styles.name}>Oshadha Katulanda</Text>
                </ImageBackground>
                <View style={styles.container}>
                    <DrawerNavigatorItems {...this.props} />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#FFF'
    },
    name: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: '800',
        marginVertical: 8
    }
});