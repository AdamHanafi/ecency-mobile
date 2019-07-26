import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subLine: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '$deviceWidth - 30',
    // justifyContent: 'flex-end',
    flex: 1,
  },
  sponsoredWrapper: {
    justifyContent: 'flex-end',
    marginRight: 10,
    flex: 1,
  },
  sponsoredText: {
    fontSize: 10,
    color: '$primaryDarkGray',
    textAlign: 'right',
    alignItems: 'stretch',
    alignSelf: 'flex-end',
  },
  avatar: {
    borderColor: '$borderColor',
    borderWidth: 1,
    marginRight: 5,
  },
  name: {
    marginHorizontal: 3,
    fontSize: 11,
    color: '$primaryBlack',
    fontFamily: '$primaryFont',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  reputation: {
    fontSize: 11,
    color: '$primaryDarkGray',
    marginRight: 8,
    alignSelf: 'center',
  },
  date: {
    fontSize: 10,
    color: '$primaryDarkGray',
  },
  avatarNameWrapper: {
    flexDirection: 'row',
  },
  reblogedIcon: {
    color: '$iconColor',
    fontSize: 12,
    marginLeft: 10,
    alignSelf: 'center',
  },
  ownerIndicator: {
    color: '$primaryBlue',
    alignSelf: 'center',
    marginLeft: 8,
  },
});
