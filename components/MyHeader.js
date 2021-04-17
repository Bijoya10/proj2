import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class MyHeader extends React.Component {
    render() {
        return (
            <View
                style={styles.header}>
                <Text style={styles.txt}>
                    {this.props.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        marginVertical: 30,
        backgroundColor: 'indigo',
        padding: 10,
        alignItems: 'center',
    },
    txt: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "white"
    }
})