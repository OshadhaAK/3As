import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default class Screen extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <StatusBar backgroundColor='#161924' animated={true}>

                </StatusBar>

                <SafeAreaView style={{ flex: 0, backgroundColor: '#0072A0' }}>
                    <TouchableOpacity
                        style={{ alignItems: "flex-start", margin: 16 }}
                        onPress={this.props.navigation.openDrawer}
                    >
                        <FontAwesome5 name='bars' size={24} color='#161924' />
                    </TouchableOpacity>

                </SafeAreaView>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', margin: 40 }}>
                    <Text style={styles.text}>{this.props.name} Screen</Text>
                </View>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    text: {
        color: '#161924',
        fontSize: 20,
        fontWeight: '500'
    }
});
