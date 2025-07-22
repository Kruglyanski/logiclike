import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { ICourse } from '../../interfaces/course';

interface IProps {
  course: ICourse;
}

export const CourseCard: FC<IProps> = React.memo(({ course }) => {
  return (
    <View style={[styles.card, { backgroundColor: course.bgColor }]}>
      <Image source={{ uri: course.image }} style={styles.image} />
      <View style={styles.fakeShadow}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{course.name}</Text>
        </View>
      </View>
    </View>
  );
});
