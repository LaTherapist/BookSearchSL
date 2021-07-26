import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 5,
    marginBottom: 4,
    borderWidth: 1,
  },
  imageWrapper: {
    flex: 2 / 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  textWrapper: {
    flex: 5 / 7,
  },
  category: {
    marginRight: 5,
  },
  titleWrapper: {
    flexDirection: 'row',
    marginVertical: 3,
    maxWidth: '80%',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
});
