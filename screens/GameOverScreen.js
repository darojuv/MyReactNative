import React from 'react';

import {View, StyleSheet, Image, Button } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOver = props => { 

    return <View style={styles.mainStyle}>
     <TitleText>Game Over!!</TitleText>
     <View style={styles.imageContainer} >
        <Image 
            style={styles.image} 
            source={require('../assets/success.png')}
            resizeMode="cover"
        />
     </View>

     <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
     <BodyText>Number was: {props.userNumber}</BodyText>
     <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
};

const styles = StyleSheet.create({
    mainStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    imageContainer:{
        borderRadius:150,
        borderWidth:3,
        borderColor:'black',
        width:300,
        height:300,
        overflow:'hidden',
        marginVertical:30
    }
});


export default GameOver;