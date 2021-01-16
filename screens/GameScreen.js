import React, {useState} from 'react';

import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
import Card from '../components/Card';

import NumberContaier from '../components/NumberContainer';


const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude);   
    } else {
        return rndNum;
    }
};

const GameScreen = props => { 
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
        );

    return <View style={styles.screen}>
     <Text>Opponent's Guess </Text>
     <NumberContaier>{currentGuess}</NumberContaier>
     <Card style={styles.buttonContainer}>
         <Button title="LOWER" onPress={() => {}} />
         <Button title="GREATER" onPress={() => {}} />
     </Card>
    </View>
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        padding:10,
        alignItems:'center',

    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop:20,
        width:300,
        maxWidth:'80%'
    }
});


export default GameScreen;