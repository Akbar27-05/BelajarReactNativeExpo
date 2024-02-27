import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button } from 'react-native';

export default function App() {
  const [valText, setValText] = useState('');

  const handleInput = (text) => {
    setValText(text);
  };

  const handleSave = () => {
    console.log('Nilai input: ', valText);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Some text</Text>
      <Text style={styles.text}>{valText}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="You can type in me"
        value={valText}
        onChangeText={handleInput}
      />
      <Button title="Simpan" onPress={handleSave} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});
