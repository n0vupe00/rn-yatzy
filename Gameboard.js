import React, { useState, useEffect} from 'react';
import { Text, View, Pressable } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Col, Grid } from 'react-native-easy-grid';
import styles from './Tyyli';

let board = [];
const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3;
const bonus = 50;
const NBRS = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
    { value: 6 },
];

export default function Gameboard() {

    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [status,setStatus]= useState('Throw dices.');
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    const [diceSpots, setDiceSpots] = useState(new Array(6).fill(0));
    const [selectedDicePoints, setSelectedDicePoints] = useState(new Array(6).fill(false));
    const [dicePointsTotal, setDicePointsTotal] = useState(0);
    const [values, setValues] = useState([]);
    const [bonusPoints, setBonusPoints] = useState(63);
    const [bonusMessage, setBonusMessage] = useState('You are ' + { bonusPoints } + ' points from bonus');
    const [bonusStatus,setBonusStatus] = useState(false);
    const [buttonText, setButtonText] = useState('Throw dices');

    const diceRow = []
    for (let i = 0; i < NBR_OF_DICES; i++) {
        diceRow.push(
            <Pressable
                key={"diceRow" + i}
                onPress={() => selectDice(i)}>
                <MaterialCommunityIcons
                    name={board[i]}
                    key={"diceRow" + i}
                    size={70}
                    color={getDiceColor(i)}>
                </MaterialCommunityIcons>
            </Pressable>
        )
    }

    const pointsRow = [];
    for (let i = 0; i < NBRS.length; i++) {
        pointsRow.push(
            <View key={'rowPoints' + i} style={styles.grid}>
                <Text style={styles.container}>{diceSpots[i]}</Text>
                <Grid style={styles.grid}>
                    <Col size={70}>
                        <Pressable
                            key={"numbersRow" + i}
                            onPress={() => selectPoints(i)}>
                            <MaterialCommunityIcons
                                name={["numeric-" + (i + 1) + "-box"]}
                                size={50}
                                color={getPointColor(i)}>
                            </MaterialCommunityIcons>
                        </Pressable>
                    </Col>
                </Grid>
            </View>
        )
    }

    function getDiceColor(i) {
        return selectedDices[i] ? "black" : "blue";
    }
    function getPointColor(i) {
        return selectedDicePoints[i] ? "black" : "red";
    }

    function selectDice(i) {
        if (nbrOfThrowsLeft === NBR_OF_THROWS) {
            setStatus('You have to throw dices first');
            return;
        }
        let dices = [...selectedDices];
        dices[i] = selectedDices[i] ? false : true;
        setSelectedDices(dices);
    }

    function selectPoints(i) {
        if (nbrOfThrowsLeft > 0) {
            setStatus('Throw three times before setting points');
            return;
        }
        if (selectedDicePoints[i] === true) {
            setStatus('You already selected points for ' + (i + 1));
            return;
        }

        let points = [...selectedDicePoints]
        let dicePoints = [...diceSpots]
        points[i] = selectedDicePoints[i] ? false : true
        let sum = 0
        for (let j = 0; j < values.length; j++) {
            if (NBRS[i].value == values[j]) {
                sum = sum + values[j]
            }
        }

        dicePoints[i] = sum;
        setSelectedDicePoints(points);
        setDiceSpots(dicePoints);
        let sumDicePoints = dicePoints.reduce((a, b) => a + b, 0);
        setDicePointsTotal(sumDicePoints);
        setBonusPoints(63 - sumDicePoints);
        setSelectedDices(new Array(6).fill(false));
        setNbrOfThrowsLeft(3);
    }

    function throwDices() {
        let dices = [...values];
        if (selectedDicePoints.every(value => value === true)) {
            newGame();
            
        }
        if (nbrOfThrowsLeft === 0) {
            setStatus('Select your points before your next throw');
            return;
        }
        for (let i = 0; i < NBR_OF_DICES; i++) {
            if(!selectedDices[i]) {
                let randomNumber = Math.floor(Math.random() * 6 + 1);
                board[i] = 'dice-' +randomNumber;
                dices[i] = randomNumber;
            }
        }
        setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
        setValues(dices);
        
    }

    function checkBonusPoints() {
        setBonusMessage('You are ' + bonusPoints + ' points from bonus');
        if (selectedDicePoints.every(value => value === true)) {
            setStatus('Game over. All points selected');
            if (bonusStatus == true) {
                let newTotal = dicePointsTotal + bonus;
                setStatus('Well done! You got a bonus of ' + bonus + 'points!');
                setBonusMessage('');
                setDicePointsTotal(newTotal);
                return newTotal;
            }
            setNbrOfThrowsLeft(0);
            setButtonText('Start a new game');
        }
        if ((selectedDicePoints.every(value => value === true)) && dicePointsTotal >= 63) {
            setBonusStatus(true);
        }
        if (dicePointsTotal >= 63) {
            setBonusMessage('');
        }
    }

    function newGame() {
        setNbrOfThrowsLeft(NBR_OF_THROWS);
        setStatus('');
        setSelectedDices(new Array(NBR_OF_DICES).fill(false));
        setSelectedDicePoints(new Array(6).fill(false));
        setValues([]);
        setDiceSpots(new Array(6).fill(0));
        setDicePointsTotal(0);
        setBonusPoints(63);
        setBonusMessage('You are ' + { bonusPoints } + ' points from bonus');
        setButtonText('Throw dices');
        setBonusStatus(false);
        board = [];
    }

    useEffect(() => {
        if (nbrOfThrowsLeft === NBR_OF_THROWS) {
            setStatus('Throw dices...')
        }
        if (nbrOfThrowsLeft > 0 && nbrOfThrowsLeft < NBR_OF_THROWS) {
            setStatus('Select and throw dices again')
        }
        if (nbrOfThrowsLeft === 0) {
            setStatus('Select your points');
        }
        checkBonusPoints()
    }, [nbrOfThrowsLeft])


    return(
        <View style={styles.gameboard}>
            <View style={styles.flex}>{diceRow}</View>
            <Text style={styles.gameinfo}>Throws left: {nbrOfThrowsLeft}</Text>
            <Text style={styles.gameinfo}>{status}</Text>
            <Pressable style={styles.button} onPress={() => throwDices()}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </Pressable>
            <Text style={styles.totalText}>Total points: {dicePointsTotal} </Text>
            {bonusStatus == true ? 
            <Text style={styles.bonusTextClear}>{bonusMessage}</Text>
            :
            <Text style={styles.bonusText}>{bonusMessage}</Text>
            }
            <View><Text>{pointsRow}</Text></View>
        </View>
    )
}