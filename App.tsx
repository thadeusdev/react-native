import React, { useState } from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import {v4 as uuidv4} from 'uuid';

const App = () => {
  const v4options = {
    random: [
      0x10, 0x91, 0x56, 0xbe, 0xc4, 0xfb, 0xc1, 0xea, 0x71, 0xb4, 0xef, 0xe1,
      0x67, 0x1c, 0x58, 0x36,
    ],
  };

  const [items, setItems] = useState([
    {id: uuidv4(v4options), text: 'Milk'},
    {id: uuidv4(v4options), text: 'Eggs'},
    {id: uuidv4(v4options), text: 'Bread'},
    {id: uuidv4(v4options), text: 'Juice'},
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
