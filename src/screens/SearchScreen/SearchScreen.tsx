import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import Books from './components/Books';
import SearchInput from './components/SearchInput/SearchInput';

const SearchScreen = () => {
  const [title, setTitle] = useState('');

  return (
    <SafeAreaView>
      <View>
        <SearchInput 
          handleInput={setTitle}
          title={title}
        />
        <Books />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen;