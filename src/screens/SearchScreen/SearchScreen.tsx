import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Books from './components/Books';
import SearchInput from './components/SearchInput/SearchInput';

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <View >
        <SearchInput />
        <Books />
      </View>
    </SafeAreaView>
  );
};

export default SearchScreen;
