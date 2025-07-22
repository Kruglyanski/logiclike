import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Fonts } from '../../constants/Fonts';

export const styles = StyleSheet.create({
  tagItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 2,
    marginVertical: 4,
    borderRadius: 12,
    borderColor: Colors.LIGHT_BLUE,
  },

  active: {
    backgroundColor: Colors.GREEN,
  },

  text: {
    fontFamily: Fonts.EXTRA_BOLD,
    fontSize: 18,
  },

  activeText: {
    color: Colors.WHITE,
  },
});
