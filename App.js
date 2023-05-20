import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [difference, setDifference] = useState(0);

  const calculateDifference = () => {
    const [day1, month1, year1] = date1.split('-').map(Number);
    const [day2, month2, year2] = date2.split('-').map(Number);

    const date1Obj = new Date(year1, month1 - 1, day1);
    const date2Obj = new Date(year2, month2 - 1, day2);

    const timeDiff = Math.abs(date2Obj.getTime() - date1Obj.getTime());
    const diffInDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    setDifference(diffInDays);
  };

  return (
    <LinearGradient
      colors={['#08AEEA', '#2AF598']}
      style={styles.container}
    >
      <View style={styles.inputsContainer}>
        <TextInputMask
          style={styles.input}
          placeholder="Digite a primeira data (DD-MM-AAAA)"
          type="datetime"
          options={{
            format: 'DD-MM-YYYY'
          }}
          onChangeText={text => setDate1(text)}
          value={date1}
        />
        <TextInputMask
          style={styles.input}
          placeholder="Digite a segunda data (DD-MM-AAAA)"
          type="datetime"
          options={{
            format: 'DD-MM-YYYY'
          }}
          onChangeText={text => setDate2(text)}
          value={date2}
        />
      </View>
      <Button title="Calcular" onPress={calculateDifference} />
      <Text style={styles.resultText}>
        A diferença entre as datas é de {difference} dias.
      </Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputsContainer: {
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#FFFFFF',
  },
});

export default App;
