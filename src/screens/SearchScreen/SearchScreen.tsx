import React from 'react';
import {SafeAreaView} from 'react-native';
import Books from './components/Books';
import SearchInput from './components/SearchInput/SearchInput';
import {styles} from './SearchScreen.styles';

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchInput />
      <Books />
    </SafeAreaView>
  );
};

export default SearchScreen;
