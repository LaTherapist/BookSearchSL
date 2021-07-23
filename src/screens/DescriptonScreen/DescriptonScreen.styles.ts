import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingBottom: 5,
  },
  imageWrapper: {
    width: '100%',
    height: 320,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textRow: {
    flexDirection: 'row',
    marginBottom: 3,
    maxWidth: '85%',
  },
  subtitle: {
    marginRight: 5,
    fontWeight: '700',
  },
  text: {
    fontSize: 17,
    lineHeight: 25,
  },
});