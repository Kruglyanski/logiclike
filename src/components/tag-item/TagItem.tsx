import React, { useCallback } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const TagItem = React.memo<{
  item: string;
  isActive: boolean;
  onPress: (item: string) => void;
}>(({ item, isActive, onPress }) => {
  const handlePress = useCallback(() => onPress(item), [item, onPress]);

  return (
    <TouchableOpacity
      style={[styles.tagItem, isActive && styles.active]}
      onPress={handlePress}
    >
      <Text style={[styles.text, isActive && styles.activeText]}>{item}</Text>
    </TouchableOpacity>
  );
});
