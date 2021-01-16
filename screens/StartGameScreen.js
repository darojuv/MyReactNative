import React, { useState } from 'react';

import {View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import Card from '../components/Card';
import Colors from '../contsants/colors';
import Input from '../components/Input';
import NumberContaier from '../components/NumberContainer';

const StartGameScreen = props => {
    const [ enteredValue, setEnteredValue ] = useState('');
    const [ confirmed, serConfirmed] = useState('');
    const [ selectedNumber, setSelectedNumber ] = useState('');
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    const resetInputHandler = () => {
        setEnteredValue('');
        serConfirmed(true);
    };
    const confirmInputHandler = () => {
        const choseNumber = parseInt(enteredValue);
        if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99){
            Alert.alert('Invalid Number', 'Number has to be number',[{text: 'Okey', style:'destructive', onPress: resetInputHandler}]);
            return;
        }
        serConfirmed(true);
        setSelectedNumber(parseInt(enteredValue));
        setEnteredValue('');
        Keyboard.dismiss();
    };
    let confirmedOutput; 
    if(confirmed)
    {
        confirmedOutput = 
        <Card style={styles.summaryContainer}>
            <Text >You selected</Text>
            <NumberContaier>
                {selectedNumber}
            </NumberContaier>
            <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)} />
        </Card>
    }
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss();}} >
            <View style={styles.screen}>
                <Text>Start a new Game</Text>

                <Card style={styles.inputContainer} >
                <Text>Select a Number</Text>
                <Input blurOnSubmit 
                        autoCapitalize='none' autoCurrect={false} keyboardType="number-pad" maxLength={2} styles={styles.input}
                       onChangeText={numberInputHandler}
                       value={enteredValue}  />
                <View style={styles.buttonsContainer} >
                    <View style={styles.buttons} ><Button title="Reset" onPress={resetInputHandler} color={Colors.accent} /></View>
                    <View style={styles.buttons} ><Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} /></View>
                </View>
                </Card>
            {confirmedOutput}
            </View>

        </TouchableWithoutFeedback>
            
        );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer:{
        padding: 20,
        borderRadius:20,
        width: 300
    },
    buttonsContainer: {
        flexDirection:'row',
        alignContent: 'space-around',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttons:{
        width:100
    },
    input:{
        width:50,
        textAlign:'center'
    },
    summaryContainer:{
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;