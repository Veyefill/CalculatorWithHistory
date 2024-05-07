import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

  const [firstNum, setFirstNum] = useState('');
  const [secondNum, setSecondNum] = useState('');
  const [result, setResult] = useState('');
  const [calcHist, setCalcHist] = useState([]);


  const Add = () => {
    const AddOne = parseFloat(firstNum);
    const AddTwo = parseFloat(secondNum);
    const fakeResult = AddOne + AddTwo;
    setResult(fakeResult);
    setCalcHist([...calcHist, `${AddOne} + ${AddTwo} = ${fakeResult}`])
  }
  const Subtract = () => {
    const SubOne = parseFloat(firstNum);
    const SubTwo = parseFloat(secondNum);
    const fakeResult = SubOne - SubTwo;
    setResult(fakeResult);
    setCalcHist([...calcHist, `${SubOne} - ${SubTwo} = ${fakeResult}`])
  }

  //No idea why the FlatList isn't centered
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Result: {result}</Text>
      <TextInput style={{ width: 300, borderColor: 'black', borderWidth: 1 }} onChangeText={firstNum => setFirstNum(firstNum)} value={firstNum} keyboardType="numeric"></TextInput>
      <TextInput style={{ width: 300, borderColor: 'black', borderWidth: 1 }} onChangeText={secondNum => setSecondNum(secondNum)} value={secondNum} keyboardType="numeric"></TextInput>
      <View style={{ flexDirection: 'row' }}>
        <Button onPress={Add} title="+"></Button>
        <View style={{ marginLeft: 10 }}>
          <Button onPress={Subtract} title="-"></Button>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <FlatList
          data={calcHist}
          renderItem={({ item }) => (<Text>{item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        ></FlatList>
      </View>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
