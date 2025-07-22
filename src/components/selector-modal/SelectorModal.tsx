import React, { FC, useCallback } from 'react';
import { Modal, FlatList, View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { TagItem } from '../tag-item/TagItem';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Colors } from '../../constants/Colors';
import {
  ALL_THEMES_TITLE,
  SUPPORTED_ORIENTATIONS,
} from '../../constants/constants';

interface IProps {
  isVisible: boolean;
  tags: readonly string[];
  selected: string | null;
  onSelect: (tag: string | null) => void;
  onClose: () => void;
}

const keyExtractor = (item: string) => item;

export const SelectorModal: FC<IProps> = ({
  isVisible,
  tags,
  selected,
  onSelect,
  onClose,
}) => {
  const data = [ALL_THEMES_TITLE, ...tags];

  const onPress = useCallback(
    (item: string) => {
      onSelect(item === ALL_THEMES_TITLE ? null : item);
      onClose();
    },
    [onSelect, onClose],
  );

  const renderItem = useCallback(
    ({ item }: { item: string }) => (
      <TagItem
        isActive={item === selected || (item === ALL_THEMES_TITLE && !selected)}
        {...{ onPress, item }}
      />
    ),
    [onPress, selected],
  );

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      supportedOrientations={SUPPORTED_ORIENTATIONS}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.placeholderView} />
          <Text style={styles.title}>Выбор темы</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Icon name="x" size={22} color={Colors.LIGHT_BLUE} />
          </TouchableOpacity>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            {...{ data, keyExtractor, renderItem }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </Modal>
  );
};
