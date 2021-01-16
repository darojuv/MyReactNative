import React from 'react';

import {View, StyleSheet, Text, Button } from 'react-native';

const GameOver = props => { 

    return <View style={styles.tmainStyle}>
     <Text>Game Over!!</Text>
     <Text>Number of rounds: {props.roundsNumber}</Text>
     <Text>Number was: {props.userNumber}</Text>
     <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
};

const styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
});


export default GameOver;