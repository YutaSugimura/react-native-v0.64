import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('screen');

export type ListItem = {
  id: string;
  title: string;
  body: string;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: 60,
    width,
    backgroundColor: '#ccc',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  body: {
    fontSize: 15,
  },
});

type Props = {
  item: ListItem;
};

export const ListItemComponent: React.FC<Props> = ({ item: { title, body } }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};
