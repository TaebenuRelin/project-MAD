import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props {
  text: string;
}

const Title = ({text}: Props) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Title;
