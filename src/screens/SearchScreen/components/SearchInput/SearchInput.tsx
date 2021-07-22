import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import SearchImage from '../../../../../assets/SearchImage';
import { fetchBooks } from '../../../../store/bookSlice';
import { styles } from './SearchInput.styles';

interface Props {
  handleInput: React.Dispatch<React.SetStateAction<string>>;
  title: string;
};

const SearchInput = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(text) => props.handleInput(text)}
        style={styles.input}
        placeholder='Search'
      />
      <TouchableOpacity 
        style={styles.inputWrapper}
        onPress={() => dispatch(fetchBooks(props.title))}
      >
        <SearchImage
          width={30}
          height={30}
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchInput;
