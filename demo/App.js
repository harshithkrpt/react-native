import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  FlatList,
} from 'react-native';

const App = props => {
  const [name, setName] = useState('');
  const [places, setPlaces] = useState([]);
  const handleChangeText = value => {
    setName(value);
  };

  const handleSubmit = () => {
    setPlaces([...places, {key: name}]);
  };
  return (
    <View style={styles.body}>
      <View style={styles.input}>
        <TextInput
          value={name}
          onChangeText={handleChangeText}
          placeholder="Name"
        />
        <Button title="submit" onPress={handleSubmit}>
          Submit
        </Button>
      </View>
      <FlatList
        data={places}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default App;
