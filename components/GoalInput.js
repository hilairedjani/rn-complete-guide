import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Button, Modal } from 'react-native'

const GoalInput = (props) => {

    const [enteredGoal, setEnteredGoal] = useState("");

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal("");
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />

                <View style={styles.buttonContainer}>
                    <View style={styles.button}><Button title="+" color="green" onPress={addGoalHandler} /></View>
                    <View style={styles.button}><Button title="x" color="red" onPress={props.onCancel}></Button></View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 5
    },
    input: {
        width: "75%",
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        width: "20%",
        justifyContent: "space-around",
    },
    button: {
        width: "40%",
    }
});


export default GoalInput
