import React, {useState, useRef, useEffect} from 'react';

import {View, StyleSheet, Text, Alert, ScrollView, FlatList, Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from '../components/Card';

import NumberContaier from '../components/NumberContainer';
import DefaultStyles from '../contsants/default-styles';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

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

const renderListItem = (listLength, itemData) => {return (
        <View style={styles.listItem} >
            <BodyText>#{listLength - itemData.index}
            </BodyText>
            <BodyText>{itemData.item}
            </BodyText>            
        </View>
        )};

const GameScreen = props => { 
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess );
    const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;


    useEffect(() => {
        if(currentGuess === props.userChoice){
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver ]);

    const nextGuessHandler = direction => {
        if((direction === 'lower' && currentGuess < props.userChoice) || (direction === 'greater' && currentGuess > props.userChoice)){
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ Text:'Sorry!', style:'cancel'}]);
            return;
        }
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds + 1);
        setPastGuesses(curPastGuesses => [ nextNumber.toString() , ...curPastGuesses]);
    };

    let listContainerStyle = styles.listContainer;
    if(Dimensions.get('window').width < 350){
        listContainerStyle = styles.listContainerBig
    }

    return <View style={styles.screen}>
     <Text style={DefaultStyles.title} >Opponent's Guess </Text>
     <NumberContaier>{currentGuess}</NumberContaier>
     <Card style={styles.buttonContainer}>
            <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="md-remove" size={24} color="white" />
            </MainButton>
            <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="md-add" size={24} color="white" />
            </MainButton>
     </Card>
     <View style={listContainerStyle}>
        {/* <ScrollView contentContainerStyle={styles.list} >
            {pastGuesses.map((guess, index) => (renderListItem(guess, pastGuesses.length - index)))}
        </ScrollView>
         */}
        <FlatList 
            contentContainerStyle={styles.list}
            keyExtractor={(item) => item} 
            data={pastGuesses} 
            renderItem={renderListItem.bind(this, pastGuesses.length)} />
     </View>
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
        // marginTop:20,
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
        width:400,
        maxWidth:'90%'
    },
    listItem:{
        borderColor: '#ccc',
        borderWidth: 1,
        padding:15,
        marginVertical:10,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'100%',

    },
    listContainer:{
        flex:1, //for android to scroll the list.
        width:'60%'
    },
    listContainerBig:{
        flex:1,
        width:'80%'
    },
    list:{
        flexGrow:1,
        // alignItems: 'center',
        justifyContent: 'flex-end',
    }
});


export default GameScreen;