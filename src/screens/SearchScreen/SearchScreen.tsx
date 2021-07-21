import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import Books from './components/Books';
import SearchInput from './components/SearchInput/SearchInput';

const SearchScreen = () => {
  const [title, setTitle] = useState('');

  return (
    <SafeAreaView>
      <SearchInput 
        handleInput={setTitle}
        title={title}
      />
      <Books />
    </SafeAreaView>
  )
}

export default SearchScreen;