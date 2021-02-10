import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { ListItem, ListItemComponent } from './ListItem';

const generateListItem = (num: number) => ({
  id: `id-${num}`,
  title: `title_${num}`,
  body: `text-${num}-text`,
});

type Props = {};

export const ListComponent: React.FC<Props> = () => {
  const [list, setList] = useState<ListItem[]>([]);

  useEffect(() => {
    const newList: ListItem[] = [];
    for (let i = 0; i < 1000; i++) {
      newList.push(generateListItem(i));
    }
    setList(newList);
  }, []);

  return (
    <FlatList
      data={list}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ListItemComponent item={item} />}
    />
  );
};
