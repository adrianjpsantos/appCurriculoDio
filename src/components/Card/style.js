import {StyleSheet} from 'react-native';

const primaryColor = '#fafafa';
const accentColor = '#5cb874';
const accentColorDark = '#459F5D';
const white = '#ffffff';

const style = StyleSheet.create({
  card: {
    backgroundColor: accentColor,
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 20,
    padding: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
    gap: 5,
  },
  cardHeaderTitle: {
    fontSize: 18,
    color: white,
  },
  cardHeaderIcon: {
    fontSize: 20,
    marginEnd: 5,
    color: white,
  },
  cardContent: {
    paddingTop: 5,
    borderTopWidth: 2,
    borderColor: white,
  },
  textCard: {
    fontSize: 15,
    color: white,
    fontWeight: '400',
    paddingVertical: 2,
    borderBottomWidth: 1,
    borderColor: accentColorDark,
  },
});

export default style;
