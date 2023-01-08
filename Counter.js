import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import React, { Component } from 'react';

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    };

    decrement = () => {
        this.setState({ counter: this.state.counter == 0 ? 0 + 0 : this.state.counter - 1 });
    };

    render() {
        return (
            <View style={{ flex: 1 }}>


                <View style={styles.header}>
                    <StatusBar backgroundColor="green"></StatusBar>
                    <Text style={styles.headerTitle}> Counter Application</Text>
                </View>

                <View style={styles.bodyView}>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => this.decrement()}
                            style={{ backgroundColor: 'skyblue', justifyContent: 'center' }}>
                            <Text style={styles.buttonText}> Decrement </Text>
                        </TouchableOpacity>

                        <Text style={{ alignSelf: 'center', padding: 20, fontSize: 20 }}>
                            {this.state.counter}
                        </Text>

                        <TouchableOpacity
                            onPress={() => this.increment()}
                            style={{ backgroundColor: 'skyblue', justifyContent: 'center' }}>
                            <Text style={styles.buttonText}> Increment </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'green',
        height: 80,
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 14,
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        paddingHorizontal: 40,
    },
    bodyView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
});

export default Counter;
